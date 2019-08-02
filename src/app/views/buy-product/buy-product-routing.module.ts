import { BuyProductComponent } from './buy-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BuyProductComponent } from './change-password.component';

const routes: Routes = [
    {
        path: '',
        component: BuyProductComponent,
        data: {
            title: 'Vendor account'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class buyProductRoutingModule { }
