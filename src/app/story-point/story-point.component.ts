import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from 'src/shared/service/utils.service';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-story-point',
  templateUrl: './story-point.component.html',
  styleUrls: ['./story-point.component.sass']
})
export class StoryPointComponent implements OnInit {

  points: number[];
  @Input() connectionId: string;
  constructor(private utilsService: UtilsService,
              private socketService: SocketService) { }

  ngOnInit() {
    this.points = this.utilsService.getFibonacciList(12);
  }

  sendPoint(point) {
    this.socketService.sendPoint(point, this.connectionId) ;
  }
}
