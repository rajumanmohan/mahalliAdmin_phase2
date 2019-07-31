import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { StaffRoutingModule } from './staff-routing.module';
import { AddstaffComponent } from './addstaff.component'

@NgModule({
  declarations: [StaffComponent, AddstaffComponent],
  imports: [
    CommonModule, StaffRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class StaffModule { }
