import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DeveloperViewComponent } from './developer-view.component';

const routes: Routes = [
    { path: '', component: DeveloperViewComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
