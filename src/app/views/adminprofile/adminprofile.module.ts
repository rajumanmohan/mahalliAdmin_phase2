import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminprofileComponent } from './adminprofile.component';
import { AdminProfileRoutingModule } from './adminprofile-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AdminprofileComponent],
  imports: [
    CommonModule, AdminProfileRoutingModule, FormsModule
  ]
})
export class AdminprofileModule { }
