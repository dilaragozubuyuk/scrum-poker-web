import { Component, Input } from '@angular/core';
import { StoryInterface } from '../interfaces/story.interface';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
})

export class StoryListComponent {
  @Input() list: StoryInterface[];
  connectionId: string;
}
