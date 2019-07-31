import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { CouponmanagementComponent } from './couponmanagement.component';
const routes: Routes = [
  {
    path: '',
    component: ChartJSComponent,
    data: {
      title: 'coupon'
    }
  },
  {
    path: 'addcoupon',
    component: CouponmanagementComponent,
    data: {
      title: 'coupon'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule { }
