import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerproductsComponent } from './wholesellerproducts.component';
import { AddwholesellerproductsComponent } from './addwholesellerproducts.component';
import { FormsModule } from '@angular/forms';
import { WholesellerproductsRoutingModule } from './wholesellerproducts-routing.module';
import { ProductapprovalComponent } from './productapproval.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [WholesellerproductsComponent, AddwholesellerproductsComponent, ProductapprovalComponent],
  imports: [
    CommonModule, WholesellerproductsRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class WholesellerproductsModule { }
