import { Component, OnInit, Input } from '@angular/core';
import { StoryInterface } from '../interfaces/story.interface';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() list: StoryInterface[];
  constructor() { }

  ngOnInit() {
  }

}
