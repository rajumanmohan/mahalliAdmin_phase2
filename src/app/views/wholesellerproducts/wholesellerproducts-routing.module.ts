import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WholesellerproductsComponent } from './wholesellerproducts.component';
import { AddwholesellerproductsComponent } from './addwholesellerproducts.component';
import { ProductapprovalComponent } from './productapproval.component';

const routes: Routes = [
    {
        path: '',
        component: WholesellerproductsComponent,
        data: {
            title: 'Wholeseller'
        }
    },
    {
        path: 'addwholesellerproducts',
        component: AddwholesellerproductsComponent,
        data: {
            title: 'Wholeseller'
        }
    },
    {
        path: 'productsapproval',
        component: ProductapprovalComponent,
        data: {
            title: 'Wholeseller'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WholesellerproductsRoutingModule { }
