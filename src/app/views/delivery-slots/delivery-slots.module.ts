import { deliverySlotsRoutingModule } from './delivery-slots-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverySlotsComponent } from '../delivery-slots/delivery-slots.component';
import { FormsModule } from '@angular/forms';
// import { IntlModule } from '@progress/kendo-angular-intl';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { deliverySlotsRoutingModule } from './delivery-slots/delivery-deliverySlotsRoutingModule';

@NgModule({
  declarations: [DeliverySlotsComponent],
  imports: [
    CommonModule, FormsModule, deliverySlotsRoutingModule
  ]
})
export class DeliverySlotsModule { }



