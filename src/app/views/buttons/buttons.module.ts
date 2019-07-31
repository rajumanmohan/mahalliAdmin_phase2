import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { AddmainbannerComponent } from './addmainbanner.component';
import { AddfeaturebannerComponent } from './addfeaturebanner.component';
import { AddecommercebannersComponent } from './addecommercebanners.component';
import { BrandbannerComponent } from './brandbanner.component';
import { AddbrandbannersComponent } from './addbrandbanners.component';
import { SinglebannerComponent } from './singlebanner.component';
import { AddsinglebannerComponent } from './addsinglebanner.component';
import { EcommerceComponent } from './ecommerce.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    SafePipeModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  declarations: [
    ButtonsComponent,
    DropdownsComponent,
    BrandButtonsComponent,
    AddmainbannerComponent,
    AddfeaturebannerComponent,
    AddecommercebannersComponent,
    BrandbannerComponent,
    AddbrandbannersComponent,
    SinglebannerComponent,
    AddsinglebannerComponent,
    EcommerceComponent
  ]
})
export class ButtonsModule { }
