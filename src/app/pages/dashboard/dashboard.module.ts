import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardListModule } from '@components/card-list/card-list.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { DashboardRoutingModule } from '@pages/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    CardListModule,
    SpinnerModule
  ]
})
export class DashboardModule { }
