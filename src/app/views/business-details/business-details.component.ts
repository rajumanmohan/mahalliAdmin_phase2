import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {
  email;
  // profileData = [];
  editProfile = false;
  showprofileData = true;
  constructor(private appService: AppService) { }
  profileData = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    bussiness_area: '',
    bussiness_city: '',
    bussiness_name: '',
    bussiness_pincode: '',
    bussiness_mobile_number: '',
    bussiness_email: '',
    bussiness_country: '',
    bussiness_address: ''
  }
  ngOnInit() {
    this.getProfile()
  }
  getProfile() {
    this.email = (sessionStorage.Email);
    this.appService.loginDetailsbyEmail(this.email).subscribe((response: any) => {
      this.profileData = response.data[0];
      sessionStorage.removeItem('userName');
      sessionStorage.setItem('userName', (response.data[0].first_name) + " " + (response.data[0].last_name));
    })
  }
  cancelDetails() {
    this.showprofileData = true;
    this.editProfile = false;
    this.getProfile();
  }
  ShoweditProfile() {
    this.editProfile = true;
    this.showprofileData = false;
  }
  saveBusiness() {
    var inDate = {
      bussiness_name: this.profileData.bussiness_name,
      bussiness_pincode: this.profileData.bussiness_pincode,
      bussiness_email: this.profileData.bussiness_email,
      bussiness_mobile_number: this.profileData.bussiness_mobile_number,
      bussiness_area: this.profileData.bussiness_area,
      bussiness_city: this.profileData.bussiness_city,
      bussiness_country: this.profileData.bussiness_country,
      bussiness_address: this.profileData.bussiness_address

    }
    this.appService.updateProfile(inDate).subscribe((response: any) => {
      // swal(response.json().message, "", "success");
      this.getProfile();
      this.cancelDetails();
    })
  }
}
