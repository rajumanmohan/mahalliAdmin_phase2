import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { TermsComponent } from './terms.component';
import { PrivacyComponent } from './privacy.component';
import { TopsellersComponent } from './topsellers.component';
import { OurblogsComponent } from './ourblogs.component';
import { NewstellerComponent } from './newsteller.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContentComponent, TermsComponent, PrivacyComponent, TopsellersComponent, OurblogsComponent, NewstellerComponent],
  imports: [
    CommonModule,ContentRoutingModule,FormsModule
  ]
})
export class ContentModule { }
