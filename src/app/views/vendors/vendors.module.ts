import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorproductsComponent } from './vendorproducts.component';
import { VendorordersComponent } from './vendororders.component';
import { VendororderdetailsComponent } from './vendororderdetails.component';
import { FormsModule } from '@angular/forms';
import { EditvendorComponent } from './editvendor.component';
import { MyDatePickerModule } from 'mydatepicker';

import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllvendorproductsComponent } from './allvendorproducts.component';


@NgModule({
  declarations: [VendorsComponent, VendorproductsComponent, VendorordersComponent, VendororderdetailsComponent, EditvendorComponent, AllvendorproductsComponent],
  imports: [
    CommonModule, VendorsRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule,MyDatePickerModule
  ]
})
export class VendorsModule { }
