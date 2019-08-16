import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerComponent } from './wholeseller.component';
import { WholeSellerRoutingModule } from './wholeseller-routing.module';
import { AddwholesellerComponent } from './addwholeseller.component';
import { WholesellerproductsComponent } from './wholesellerproducts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ImageapprovalComponent } from './imageapproval.component';
import { AllwholesellerproductsComponent } from './allwholesellerproducts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WholesellerComponent, AddwholesellerComponent, WholesellerproductsComponent, ImageapprovalComponent, AllwholesellerproductsComponent],
  imports: [
    CommonModule, WholeSellerRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule,ReactiveFormsModule
  ]   
})
export class WholesellerModule { }
