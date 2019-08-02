import { buyProductRoutingModule } from './buy-product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyProductComponent } from '../buy-product/buy-product.component';
// import {buyProductRoutingModule}


@NgModule({
  declarations: [BuyProductComponent],
  imports: [
    CommonModule, buyProductRoutingModule
  ]
})
export class BuyProductModule { }
