import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './story-list.component';


@NgModule({
  declarations: [
    StoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoryListComponent
  ]
})
export class StoryListModule { }
