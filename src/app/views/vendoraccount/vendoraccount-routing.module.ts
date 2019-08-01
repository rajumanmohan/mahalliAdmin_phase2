import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendoraccountComponent } from './vendoraccount.component';

const routes: Routes = [
    {
        path: '',
        component: VendoraccountComponent,
        data: {
            title: 'Vendor account'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorAccountRoutingModule { }
