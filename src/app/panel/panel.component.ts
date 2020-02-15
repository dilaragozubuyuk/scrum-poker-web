import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {

  @Input() id: any;
  userCount = 0;
  constructor(public socketService: SocketService) { }

  ngOnInit() {
    console.log('uuu', this.id);
    // this.socketService.socket.on(this.id, () => {
    //   this.userCount++;
    // });
  }

}
