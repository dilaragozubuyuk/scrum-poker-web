import { Component, OnInit } from '@angular/core';
import { ScrumPokerService } from '../shared/service/scrum-poker.service';
import { SocketService } from '../shared/service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ScrumPokerService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scrum-pocker-web';

  constructor(private scrumPokerService: ScrumPokerService,
              private socket: SocketService) {
  }

  ngOnInit() {
    this.socket.connect();
    this.socket.sendMessage('message');
  }

}
