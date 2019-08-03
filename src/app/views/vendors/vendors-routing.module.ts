import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './vendors.component';
import { VendorproductsComponent } from './vendorproducts.component';
import { VendorordersComponent } from './vendororders.component';
import { VendororderdetailsComponent } from './vendororderdetails.component';
import { EditvendorComponent } from './editvendor.component';
import { AllvendorproductsComponent } from './allvendorproducts.component';
import { AllwholesellerproductsComponent } from '../wholeseller/allwholesellerproducts.component';

const routes: Routes = [
    {
        path: '',
        component: VendorsComponent,
        data: {
            title: 'Vendors'
        }
    },
    {
        path: 'vendorproducts',
        component: VendorproductsComponent,
        data: {
            title: 'VendorProducts'
        }
    },
    {
        path: 'vendororders',
        component: VendorordersComponent,
        data: {
            title: 'VendorOrders'
        }
    },
    {
        path: 'vendorordersdetails',
        component: VendororderdetailsComponent,
        data: {
            title: 'VendorOrderDetails'
        }
    },
    {
        path: 'editvendors',
        component: EditvendorComponent,
        data: {
            title: 'EditVendors'
        }
    }
    ,
    {
        path: 'allvendorporducts',
        component: AllvendorproductsComponent,
        data: {
            title: 'All Vendor Products'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorsRoutingModule { }
