import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductsComponent } from './addproducts.component';
import { MyproductsComponent } from './myproducts.component';
import { VendorproductsRoutingModule } from './vendorproducts-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AddproductsComponent, MyproductsComponent],
  imports: [
    CommonModule, VendorproductsRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class VendorproductsModule { }
