import { Component, OnInit, Input } from '@angular/core';
import { StoryInterface } from '../interfaces/story.interface';
import { SocketService } from 'src/shared/service/socket.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() list: StoryInterface[];
  connectionId: string;

  constructor(private socketService: SocketService) { }

  ngOnInit() {

  }
}
