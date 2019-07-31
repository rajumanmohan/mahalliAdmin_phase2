import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission.component';
import { CommissionRoutingModule } from './commission-routing.module';
import { WholesellerComponent } from './wholeseller.component'
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [CommissionComponent, WholesellerComponent],
  imports: [
    CommonModule, CommissionRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class CommissionModule { }
