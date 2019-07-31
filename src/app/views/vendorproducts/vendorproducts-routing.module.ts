import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from './addproducts.component';
import { MyproductsComponent } from './myproducts.component';

const routes: Routes = [
    {
        path: '',
        component: MyproductsComponent,
        data: {
            title: 'vendor'
        }
    },
    {
        path: 'addvendorproducts',
        component: AddproductsComponent,
        data: {
            title: 'add vendor Products'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorproductsRoutingModule { }
