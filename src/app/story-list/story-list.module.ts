import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './story-list.component';
import { StatusPipe } from '../pipes/status.pipe';


@NgModule({
  declarations: [
    StoryListComponent,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoryListComponent
  ]
})
export class StoryListModule { }
