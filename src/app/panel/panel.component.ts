import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {

  @Input() id: any;
  @Output() finalScore: any = new EventEmitter();
  constructor(public socketService: SocketService) { }

  ngOnInit() {

  }

  submitForm(value: any) {
    this.finalScore.emit(Number(value.name));

    //this.socketService.setFinalScore(value, this.id);
  }
}
