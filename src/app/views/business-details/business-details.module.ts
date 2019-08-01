import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from '../business-details/business-details.component';

import { BusinessRoutingModule } from './business-details-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BusinessDetailsComponent],
  imports: [
    CommonModule, BusinessRoutingModule, FormsModule
  ]
})
export class BusinessDetailsModule { }
