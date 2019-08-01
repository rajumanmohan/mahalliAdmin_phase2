import { changeRoutingModule } from './change-password-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from '../change-password/change-password.component';
// import { changeRoutingModule } from './vendoraccount-routing.module';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule, changeRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { VendoraccountComponent } from './vendoraccount.component';
// import { VendorAccountRoutingModule } from './vendoraccount-routing.module';
// import { FormsModule } from '@angular/forms';



// @NgModule({
//   declarations: [VendoraccountComponent],
//   imports: [
//     CommonModule, VendorAccountRoutingModule, FormsModule
//   ]
// })
// export class VendoraccountModule { }

