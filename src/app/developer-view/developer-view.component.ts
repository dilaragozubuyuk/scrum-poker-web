import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/shared/service/session.service';
import { SessionInterface } from '../interfaces/session.interface';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html',
  styleUrls: ['./developer-view.component.sass']
})
export class DeveloperViewComponent implements OnInit {
  session: SessionInterface;
  connectionId: string;
  activeStoryId: string;

  constructor(private activeRoute: ActivatedRoute,
              private sessionService: SessionService,
              private socketService: SocketService) { }

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
}
