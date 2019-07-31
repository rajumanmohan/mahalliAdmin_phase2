import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeMasterComponent } from './attribute-master/attribute-master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeMasterRoutingModule } from './attribute-master-routing.module';


@NgModule({
  declarations: [AttributeMasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AttributeMasterRoutingModule
  ]
})
export class AttributeMasterModule { }
