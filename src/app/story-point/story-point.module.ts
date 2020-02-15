import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryPointComponent } from './story-point.component';



@NgModule({
  declarations: [StoryPointComponent],
  imports: [
    CommonModule
  ],
  exports: [StoryPointComponent]
})
export class StoryPointModule { }
