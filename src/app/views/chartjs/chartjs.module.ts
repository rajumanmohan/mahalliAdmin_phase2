import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { CouponmanagementComponent } from './couponmanagement.component';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule,
    MyDatePickerModule,
    FormsModule,
    NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ],
  declarations: [ChartJSComponent, CouponmanagementComponent]
})
export class ChartJSModule { }
