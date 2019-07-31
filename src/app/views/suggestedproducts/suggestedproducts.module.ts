import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestedproductsComponent } from './suggestedproducts.component';
import { SuggestedproductsRoutingModule } from './suggestedproducts-routing.module';
import { EditsuggestedproductsComponent } from './editsuggestedproducts.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [SuggestedproductsComponent, EditsuggestedproductsComponent],
  imports: [
    CommonModule, SuggestedproductsRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class SuggestedproductsModule { }
