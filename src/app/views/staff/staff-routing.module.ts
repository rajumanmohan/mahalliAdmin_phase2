import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { AddstaffComponent } from './addstaff.component';

const routes: Routes = [
    {
        path: '',
        component: StaffComponent,
        data: {
            title: 'Staff Management'
        }
    },
    {
        path: 'addstaff',
        component: AddstaffComponent,
        data: {
            title: 'Staff Management'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class StaffRoutingModule { }
