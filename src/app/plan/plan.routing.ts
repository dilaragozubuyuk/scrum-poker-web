import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PlanComponent } from './plan.component';

const routes: Routes = [
    { path: '', component: PlanComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
