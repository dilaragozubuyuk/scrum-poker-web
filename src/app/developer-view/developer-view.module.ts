import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperViewComponent } from './developer-view.component';
import { StoryPointModule } from '../story-point/story-point.module';
import { StoryListModule } from '../story-list/story-list.module';



@NgModule({
  declarations: [DeveloperViewComponent],
  imports: [
    CommonModule,
    StoryPointModule,
    StoryListModule
  ]
})
export class DeveloperViewModule { }
