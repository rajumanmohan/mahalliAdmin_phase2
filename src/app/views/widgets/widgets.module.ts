import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { AddproductComponent } from './addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    WidgetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule

  ],
  declarations: [WidgetsComponent, AddproductComponent]
})
export class WidgetsModule { }
