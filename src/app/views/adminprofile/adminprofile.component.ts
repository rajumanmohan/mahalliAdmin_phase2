import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {
  editProfile;
  constructor(private appService: AppService,
  ) { }
  profile;
  email;
  // profileData = [];
  showprofileData = true;
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
    this.getProfile();
    this.profile = JSON.parse(sessionStorage.getItem("profile"));
  }
  ShoweditProfile() {
    this.editProfile = true;
    this.showprofileData = false;
  }
  updateProfile() {
    var inDate = {
      first_name: this.profileData.first_name,
      last_name: this.profileData.last_name,
      email: this.profileData.email,
      mobile_number: this.profileData.mobile_number,
      bussiness_area: this.profileData.bussiness_area,
      bussiness_city: this.profileData.bussiness_city,
      bussiness_name: this.profileData.bussiness_name

    }
    this.appService.updateProfile(inDate).subscribe((response: any) => {
      if (response.status == 200) {
        Swal.fire(response.message, '', "success");
        // swal(response.json().message, "", "success");
        this.getProfile();
        this.cancel();
      }

    })
  }
  getProfile() {
    this.email = (sessionStorage.Email);
    this.appService.loginDetailsbyEmail(this.email).subscribe((response: any) => {
      this.profileData = response.data[0];
      sessionStorage.removeItem('userName');
      sessionStorage.setItem('userName', (response.data[0].first_name) + " " + (response.data[0].last_name));
    })
  }
  cancel() {
    this.editProfile = false;
    this.showprofileData = true;
    this.getProfile();
  }

}
