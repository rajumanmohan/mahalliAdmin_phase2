import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestedproductsComponent } from './suggestedproducts.component';
import { EditsuggestedproductsComponent } from './editsuggestedproducts.component';

const routes: Routes = [
    {
        path: '',
        component: SuggestedproductsComponent,
        data: {
            title: 'suggested products'
        }
    },
    {
        path: 'editsuggestedproducts',
        component: EditsuggestedproductsComponent,
        data: {
            title: 'suggested products'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuggestedproductsRoutingModule { }
