import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SessionService } from 'src/shared/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { SessionInterface } from '../interfaces/session.interface';
import { SocketService } from 'src/shared/service/socket.service';
import { UserService } from 'src/shared/service/user.service';
import { UtilsService } from 'src/shared/service/utils.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: ['.view { padding-top: 40px} .link {padding-bottom: 30px} .link-text { padding-right: 10px }']
})
export class ViewComponent implements OnInit, OnDestroy {
  @Input() type: string;

  connectionId: string;
  finalScore: number;
  activeStoryId: string;
  link: string;
  activeStoryName: string;

  constructor(private sessionService: SessionService,
    private socketService: SocketService,
    private utilsService: UtilsService,
    private userService: UserService,
    private activeRoute: ActivatedRoute) { }
  session: SessionInterface;

  ngOnInit() {

    this.setUser();
    this.connectionId = this.activeRoute.snapshot.paramMap.get('sessionId');

    if (this.connectionId) {
      this.getSession().then(
        () => {
          this.startConnection();
        }
      );

      setInterval(() => {
        this.getSession();
      }, 2000);
    }
  }

  setUser() {
    this.userService.setUser({
      id: this.utilsService.getId(),
      type: this.type,
      name: this.type === 'developer' ? 'Voter' : 'Scrum Master'
    });
  }

  getSession() {
    return new Promise((resolve, reject) => {
      this.sessionService.getSession(this.connectionId)
        .subscribe((response) => {
          this.link = 'http://localhost:4200/poker-planning-view-as-developer/' + this.connectionId;
          this.session = response;
          this.setStoryConnectionId();
          resolve(true);
        },
          (error) => {
            reject(error);
          });
    });
  }

  setStoryConnectionId() {
    if (this.session.storyList) {
      const story = this.session.storyList.find(element => element.status === 'NOT_VOTED');
      if (story) {
        this.activeStoryId = story._id;
        this.activeStoryName = story.content;
      }

      this.session.storyList.forEach((element) => {
        if (element._id === this.activeStoryId && element.status !== 'VOTED') {
          element.status = 'ACTIVE';
        }
      });
    }
  }

  startConnection() {
    if (this.connectionId && this.session) {
      this.socketService.setUser(this.connectionId);
      this.socketService.createRoom(this.connectionId, this.session.numberOfVoters);
    }
  }

  updateList(finalScore) {
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

  ngOnDestroy() {
    this.socketService.leaveRoom(this.connectionId, this.userService.user);
  }

}
