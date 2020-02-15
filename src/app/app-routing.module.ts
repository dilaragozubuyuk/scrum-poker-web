import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrumMasterViewComponent } from './scrum-master-view/scrum-master-view.component';
import { DeveloperViewComponent } from './developer-view/developer-view.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {
    path: 'poker-planning-view-as-scrum-master/:sessionId',
    component: ScrumMasterViewComponent
  },
  {
    path: 'poker-planning-view-as-developer/:sessionId',
    component: DeveloperViewComponent
  },
  {
    path: 'poker-planning-add-story-list',
    component: PlanComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
