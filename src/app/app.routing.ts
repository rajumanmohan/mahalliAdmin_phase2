import { AttributeMasterModule } from './views/attribute-master/attribute-master.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AllusersComponent } from './views/allusers/allusers.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   data: {
  //     title: 'DashBoard'
  //   }
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'Category',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'coupons',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        // onSameUrlNavigation: 'reload'
      },
      {
        path: 'vendorhomepage',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        // onSameUrlNavigation: 'reload'
      },
      {
        path: 'wholesellerdashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        // onSameUrlNavigation: 'reload'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'userslist',
        loadChildren: './views/users/users.module#UsersModule'
      },
      {
        path: 'wholeseller',
        loadChildren: './views/wholeseller/wholeseller.module#WholesellerModule'
      },
      {
        path: 'vendorslist',
        loadChildren: './views/vendors/vendors.module#VendorsModule'
      },
      {
        path: 'suggestedproducts',
        loadChildren: './views/suggestedproducts/suggestedproducts.module#SuggestedproductsModule'
      },
      {
        path: 'content',
        loadChildren: './views/content/content.module#ContentModule'
      },
      {
        path: 'commission',
        loadChildren: './views/commission/commission.module#CommissionModule'
      },
      {
        path: 'staff',
        loadChildren: './views/staff/staff.module#StaffModule'
      },
      {
        path: 'profile',
        loadChildren: './views/adminprofile/adminprofile.module#AdminprofileModule'
      },
      {
        path: 'wholesellerproducts',
        loadChildren: './views/wholesellerproducts/wholesellerproducts.module#WholesellerproductsModule'
      },
      {
        path: 'vendorproducts',
        loadChildren: './views/vendorproducts/vendorproducts.module#VendorproductsModule'
      },
      {
        path: 'attrimaster',
        loadChildren: './views/attribute-master/attribute-master.module#AttributeMasterModule'
      },
      {
        path: 'ratings',
        loadChildren: './views/rating/rating.module#RatingModule'
      },
      {
        path: 'allusers',
        loadChildren: './views/allusers/allusers.module#AllusersModule'
      },
      {
        path: 'vendoraccount',
        loadChildren: './views/vendoraccount/vendoraccount.module#VendoraccountModule'
      },
      {
        path: 'businessDetails',
        loadChildren: './views/business-details/business-details.module#BusinessDetailsModule'
      },
      {
        path: 'addressDetails',
        loadChildren: './views/address-details/address-module.module#AddressModule'
      },
      {
        path: 'changePassword',
        loadChildren: './views/change-password/change-password.module#ChangePasswordModule'
      },
      {
        path: 'deliverySlots',
        loadChildren: './views/delivery-slots/delivery-slots.module#DeliverySlotsModule'
      },
      {
        path: 'buyProduct',
        loadChildren: './views/buy-product/buy-product.module#BuyProductModule'
      },
    ]
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
