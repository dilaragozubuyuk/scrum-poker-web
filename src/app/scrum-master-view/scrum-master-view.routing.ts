import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScrumMasterViewComponent } from './scrum-master-view.component';

const routes: Routes = [
    { path: '', component: ScrumMasterViewComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
