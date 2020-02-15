import { Component, OnInit } from '@angular/core';
import { ScrumPokerService } from '../shared/service/scrum-poker.service';
import { SocketService } from '../shared/service/socket.service';
import { InitService } from 'src/shared/service/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ScrumPokerService, InitService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scrum-pocker-web';

  constructor(private scrumPokerService: ScrumPokerService,
              public initService: InitService,
              private socket: SocketService) {
  }

  ngOnInit() {
    this.socket.connect();

    // this.initService.init().catch((error) => {

    //   console.log(error);
    // });
    // this.scrumPokerService.get()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );

    //this.socket.sendMessage('hello');
  }
}
