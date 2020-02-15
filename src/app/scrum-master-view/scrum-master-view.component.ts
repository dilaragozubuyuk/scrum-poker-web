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

          this.setStoryConnectionId().then(
            () => {
              this.startConnection();
            },
            () => {
            //TODO
            }
          );
        },
        (error) => {
          console.log(error);
        });
    }
  }

  public setStoryConnectionId() {
    return new Promise((resolve, reject) => {
      if (this.session.storyList) {
        this.connectionId = this.session.storyList.find(element => element.status === 'NOT_VOTED')._id;
      }

      if (this.connectionId) {
        resolve(true);
      } else {
        reject(true);
      }
    });
  }

  public startConnection() {
    this.socketService.setUser(this.connectionId);
    this.socketService.createRoom(this.connectionId);
  }

}
