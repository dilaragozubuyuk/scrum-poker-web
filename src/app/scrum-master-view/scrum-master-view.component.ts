import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { SessionInterface } from '../interfaces/session.interface';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-scrum-master-view',
  templateUrl: './scrum-master-view.component.html',
  styleUrls: ['./scrum-master-view.component.sass']
})
export class ScrumMasterViewComponent implements OnInit {
  connectionId: string;
  finalScore: number;

  constructor(private sessionService: SessionService,
    private socketService: SocketService,
    private activeRoute: ActivatedRoute) { }
  session: SessionInterface;

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('sessionId')) {
      console.log(this.activeRoute.snapshot.paramMap.get('sessionId'));

      this.sessionService.getSession(this.activeRoute.snapshot.paramMap.get('sessionId'))
        .subscribe((response) => {
          console.log(response);
          this.session = response;
          this.socketService.data.user.type = 'Master';

          setInterval(() => {
            this.setStoryConnectionId().then(
              (res: string) => {
                if (res !== this.connectionId) {
                  this.connectionId = res;
                  this.startConnection();
                }
              },
              () => {
                //TODO
              }
            );
          }, 2000);
        },
          (error) => {
            console.log(error);
          });
    }
  }

  public setStoryConnectionId() {
    return new Promise((resolve, reject) => {
      let id;
      if (this.session.storyList) {
        id = this.session.storyList.find(element => element.status === 'NOT_VOTED')._id;
      }

      if (id) {
        resolve(id);
      } else {
        reject(true);
      }
    });
  }

  public startConnection() {
    this.socketService.setUser(this.connectionId);
    this.socketService.createRoom(this.connectionId);
  }

  public updateList(finalScore) {
    this.session.storyList.forEach((element) => {
      if (element._id === this.connectionId) {
        element.point = finalScore;
        element.status = 'VOTED';
      }
    });

    this.sessionService.updateSession(this.session)
      .subscribe(
        (res) => {
          this.session = res.data;
        },
        () => {

        }
      );
  }

}
