import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {
  editProfile;
  constructor() { }
  profile;
  profileData = true;
  ngOnInit() {
    this.profile = JSON.parse(sessionStorage.getItem("profile"));
  }
  ShoweditProfile() {
    this.editProfile = true;
    this.profileData = false;
  }
}
