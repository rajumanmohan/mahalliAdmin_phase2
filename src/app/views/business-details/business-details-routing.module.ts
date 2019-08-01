import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from './business-details.component';

const routes: Routes = [
    {
        path: '',
        component: BusinessDetailsComponent,
        data: {
            title: 'Vendor account'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessRoutingModule { }
