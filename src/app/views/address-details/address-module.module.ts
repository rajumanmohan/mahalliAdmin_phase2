import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addressRoutingModule } from './address-details--routing.module';
import { AddressDetailsComponent } from './address-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddressDetailsComponent],
  imports: [
    CommonModule, addressRoutingModule, FormsModule
  ]
})
export class AddressModule { }
