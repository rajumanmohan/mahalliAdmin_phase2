import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommissionComponent } from './commission.component';
import { WholesellerComponent } from './wholeseller.component';

const routes: Routes = [
    {
        path: 'vendor',
        component: CommissionComponent,
        data: {
            title: 'Commission Management'
        }
    },
    {
        path: 'wholeseller',
        component: WholesellerComponent,
        data: {
            title: 'Commission Management'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class CommissionRoutingModule { }
