import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  @Input() id: any;
  @Input() activeStoryName: string;
  @Output() finalScore: any = new EventEmitter();
  @Input() maxUser: number;

  constructor(public socketService: SocketService) { }

  submitForm(value: any) {
    if (value.score) {
      this.finalScore.emit(Number(value.score));

      if (this.socketService.data.connectedUser) {
        this.socketService.data.connectedUser.forEach(element => element.point = 0);
      }
    }
  }

  checkNotVotedStory() {
    if (this.socketService.data.connectedUser) {
      return this.socketService.data.connectedUser.find(element => !element.point);
    }

    return false;
  }
}
