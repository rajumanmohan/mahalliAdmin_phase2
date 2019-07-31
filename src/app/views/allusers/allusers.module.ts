import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AllusersComponent } from './allusers.component';
import { AllusersRoutingModule } from './allusers-routing.module';

@NgModule({
    imports: [
        AllusersRoutingModule,
        ChartsModule,
        BsDropdownModule
    ],
    declarations: [AllusersComponent]
})
export class AllusersModule { }
