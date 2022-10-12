import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { DashboardComponent } from './components/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
