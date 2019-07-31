import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingComponent } from './rating.component';
import { RatingRoutingModule } from './rating-routing.module';



@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule, RatingRoutingModule, FormsModule, NgxPaginationModule, SafePipeModule, Ng2OrderModule, Ng2SearchPipeModule
  ]
})
export class RatingModule { }
