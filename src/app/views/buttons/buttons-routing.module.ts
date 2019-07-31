import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { AddmainbannerComponent } from './addmainbanner.component';
import { AddfeaturebannerComponent } from './addfeaturebanner.component';
import { AddecommercebannersComponent } from './addecommercebanners.component';
import { BrandbannerComponent } from './brandbanner.component';
import { AddbrandbannersComponent } from './addbrandbanners.component';
import { SinglebannerComponent } from './singlebanner.component';
import { AddsinglebannerComponent } from './addsinglebanner.component';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Main Banners'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Main Banners'
        }
      },
      {
        path: 'addmainbanner',
        component: AddmainbannerComponent,
        data: {
          title: 'banner'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'addfeaturedbuttons',
        component: AddfeaturebannerComponent,
        data: {
          title: 'Featured Banner'
        }
      },
      {
        path: 'addecommerce',
        component: AddecommercebannersComponent,
        data: {
          title: 'Ecommerce Banner'
        }
      },
      {
        path: 'brandbanner',
        component: BrandbannerComponent,
        data: {
          title: 'Brand Banner'
        }
      },
      {
        path: 'addbrandbanner',
        component: AddbrandbannersComponent,
        data: {
          title: 'Add Brand banner'
        }
      },
      {
        path: 'singlebanner',
        component: SinglebannerComponent,
        data: {
          title: 'Single Banner'
        }
      },
      {
        path: 'addsinglebanner',
        component: AddsinglebannerComponent,
        data: {
          title: 'Add SingleBanner'
        }
      },
      {
        path: 'ecommercebanners',
        component: EcommerceComponent,
        data: {
          title: 'Ecommerce banners'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
