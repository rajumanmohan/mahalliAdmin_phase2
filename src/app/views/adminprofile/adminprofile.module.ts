import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminprofileComponent } from './adminprofile.component';
import { AdminProfileRoutingModule } from './adminprofile-routing.module';




@NgModule({
  declarations: [AdminprofileComponent],
  imports: [
    CommonModule, AdminProfileRoutingModule
  ]
})
export class AdminprofileModule { }
