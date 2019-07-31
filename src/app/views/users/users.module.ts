import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddusersComponent } from './addusers.component';
import { UserordersComponent } from './userorders.component';
import { OrderdetailsComponent } from './orderdetails.component';
import { MyDatePickerModule } from 'mydatepicker';

import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, AddusersComponent, UserordersComponent, OrderdetailsComponent],
  imports: [
    CommonModule, UsersRoutingModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule, FormsModule,MyDatePickerModule
  ]
})
export class UsersModule { }
