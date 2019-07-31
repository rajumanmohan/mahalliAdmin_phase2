import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { AddbannersComponent } from './addbanners.component';
import { AddsubbannerComponent } from './addsubbanner.component';
import { AddsubsubcatComponent } from './addsubsubcat.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
      {
        path: '',
        redirectTo: 'categories'
      },
      {
        path: 'categories',
        component: CardsComponent,
        data: {
          title: 'categories'
        }
      },
      {
        path: 'addbanners',
        component: AddbannersComponent,
        data: {
          title: 'add banners'
        }
      },
      {
        path: 'addsubcatbanners',
        component: AddsubbannerComponent,
        data: {
          title: 'add banners'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'subcategories',
        component: CarouselsComponent,
        data: {
          title: 'Sub category'
        }
      },
      {
        path: 'subsubcategories',
        component: CollapsesComponent,
        data: {
          title: 'Sub Sub category'
        }
      },
      {
        path: 'addsubsubcategories',
        component: AddsubsubcatComponent,
        data: {
          title: 'Add Sub Sub category'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
