import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { TermsComponent } from './terms.component';
import { PrivacyComponent } from './privacy.component';
import { TopsellersComponent } from './topsellers.component';
import { OurblogsComponent } from './ourblogs.component';
import { NewstellerComponent } from './newsteller.component';
const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        data: {
            title: 'Content Management'
        }
    },
    {
        path: 'termsandconditions',
        component: TermsComponent,
        data: {
            title: 'Content Management'
        }
    },
    {
        path: 'privacypolicy',
        component: PrivacyComponent,
        data: {
            title: 'Content Management'
        }
    },
    {
        path: 'topseller',
        component: TopsellersComponent,
        data: {
            title: 'Content Management'
        }
    },
    {
        path: 'ourblogs',
        component: OurblogsComponent,
        data: {
            title: 'Content Management'
        }
    },
    {
        path: 'newsteller',
        component: NewstellerComponent,
        data: {
            title: 'Content Management'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class ContentRoutingModule { }
