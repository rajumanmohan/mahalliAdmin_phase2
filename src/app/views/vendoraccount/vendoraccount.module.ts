import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendoraccountComponent } from './vendoraccount.component';
import { VendorAccountRoutingModule } from './vendoraccount-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VendoraccountComponent],
  imports: [
    CommonModule, VendorAccountRoutingModule, FormsModule
  ]
})
export class VendoraccountModule { }
