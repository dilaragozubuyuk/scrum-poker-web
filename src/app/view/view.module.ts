import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { PanelModule } from '../panel/panel.module';
import { StoryPointModule } from '../story-point/story-point.module';
import { StoryListModule } from '../story-list/story-list.module';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    StoryListModule,
    StoryPointModule,
    PanelModule
  ],
  exports: [ViewComponent]
})
export class ViewModule { }
