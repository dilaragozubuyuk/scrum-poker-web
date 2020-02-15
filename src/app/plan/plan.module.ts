import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanModule { }
