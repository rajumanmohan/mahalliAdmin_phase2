import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers.component';
const routes: Routes = [
    {
        path: '',
        component: AllusersComponent,
        data: {
            title: 'allusers'
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllusersRoutingModule { }
