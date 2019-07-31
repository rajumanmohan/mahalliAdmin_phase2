import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddusersComponent } from './addusers.component';
import { UserordersComponent } from './userorders.component';
import { OrderdetailsComponent } from './orderdetails.component';
const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            title: 'Userslist'
        }
    },
    {
        path: 'addusers',
        component: AddusersComponent,
        data: {
            title: 'Add Users'
        }
    },
    {
        path: 'userorders',
        component: UserordersComponent,
        data: {
            title: 'Userslist'
        }
    },
    {
        path: 'orderdetails',
        component: OrderdetailsComponent,
        data: {
            title: 'UserOrderDetails'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
