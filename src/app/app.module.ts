import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import Swal from 'sweetalert2';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import { ExcelService } from './services/excel.service';
import { NumberOnlyDirective } from './directives/number';
import { AlphabetsOnly, EmailOnly } from './directives/number';
// import { IntlModule } from '@progress/kendo-angular-intl';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// Import containers
import { DefaultLayoutComponent } from './containers';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';

// services
import { AppService } from './services/mahali/mahali-data.service';
//import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { HTTPListener, HTTPStatus } from './httplistener.service';

// import swal from 'sweetalert';
// import swal from 'sweetalert';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AllusersComponent } from './views/allusers/allusers.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WholesalerApprovalComponent } from './views/wholesaler-approval/wholesaler-approval.component';
// import { AddressDetailsComponent } from './views/address-details/address-details.component';

@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    CKEditorModule,
    SafePipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MyDatePickerModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    // IntlModule,
    // DateInputsModule,
    // ExcelService
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AllusersComponent,
    ProfileComponent,
    NumberOnlyDirective,
    AlphabetsOnly,
    WholesalerApprovalComponent,

    // DashboardComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, AppService, ExcelService,HTTPStatus,{
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
