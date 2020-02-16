import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumMasterViewComponent } from './scrum-master-view.component';
import { StoryListModule } from '../story-list/story-list.module';
import { StoryPointModule } from '../story-point/story-point.module';
import { PanelModule } from '../panel/panel.module';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [ScrumMasterViewComponent],
  imports: [
    CommonModule,
    StoryListModule,
    StoryPointModule,
    PanelModule,
    ViewModule
  ]
})
export class ScrumMasterViewModule { }
