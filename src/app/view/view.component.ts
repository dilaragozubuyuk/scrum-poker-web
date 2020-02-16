import { Component, OnInit, Input} from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { SessionInterface } from '../interfaces/session.interface';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  connectionId: string;
  finalScore: number;
  activeStoryId: string;

  @Input() type: string;

  constructor(private sessionService: SessionService,
              private socketService: SocketService,
              private activeRoute: ActivatedRoute) { }
  session: SessionInterface;

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('sessionId')) {
      this.socketService.data.user.type = 'Master';
      this.connectionId = this.activeRoute.snapshot.paramMap.get('sessionId');
      this.startConnection();
      this.getSession();

      setInterval(() => {
        this.getSession();
      }, 2000);
    }
  }

  getSession() {
    this.sessionService.getSession(this.activeRoute.snapshot.paramMap.get('sessionId'))
      .subscribe((response) => {
        console.log(response);
        this.session = response;

        this.setStoryConnectionId();
      },
        (error) => {
          console.log(error);
        });
  }

  public setStoryConnectionId() {
    if (this.session.storyList) {
      this.activeStoryId = this.session.storyList.find(element => element.status === 'NOT_VOTED')._id;

      this.session.storyList.forEach((element) => {
        if (element._id === this.activeStoryId) {
          element.status = 'ACTIVE';
        }
      });
    }
  }

  public startConnection() {
    this.socketService.setUser(this.connectionId);
    this.socketService.createRoom(this.connectionId);
  }

  public updateList(finalScore) {
    this.session.storyList.forEach((element) => {
      if (element._id === this.activeStoryId) {
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
