import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressDetailsComponent } from './address-details.component';
// import { AddressModuleModule } from './address-module.module';

const routes: Routes = [
    {
        path: '',
        component: AddressDetailsComponent,
        data: {
            title: 'Vendor account'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class addressRoutingModule { }
