import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { navItems } from '../../_nav';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendoraccount',
  templateUrl: './vendoraccount.component.html',
  styleUrls: ['./vendoraccount.component.scss']
})
export class VendoraccountComponent implements OnInit {
  page;
  myData = []
  showAccountDetails = false;
  public navItems = navItems;
  constructor(private appService: AppService, private route: ActivatedRoute) {

    console.log(navItems[1].name);
    // for (var i = 0; i < navItems.length; i++) {
    //   console.log(navItems[1].name)
    //   if (navItems[1].name) {
    //     this.getAccDet();
    //     alert("two");

    //   }
    //   else if (navItems[2].name) {

    //     this.getAddedData();
    //     alert("one");

    //   }
    // }
    // for (var i = 0; i < navItems.length; i++) {
    //   //  myData = [];
    //   this.myData.push(navItems[i].name)
    //   console.log(this.myData)
    //   if (navItems[i].name == 'My Account') {
    //     this.getAccDet();
    //     this.showAccountDetails = false;
    //   } else {
    //     alert('test')
    //     this.showAccountDetails = true;
    //     this.getAddedData();
    //   }
    // }
    // if(){

    // }
  }
  showprofileData = true;
  editProfile = false;
  ngOnInit() {
    this.getAccDet();
  }
  accDet: any;
  getAccDet() {
    this.showAccountDetails = false;

    this.appService.getAccDetails().subscribe((res: any) => {
      this.accDet = res.data[0];
    }, err => {

    })
  }
  cancelDetails() {
    this.showprofileData = true;
    this.editProfile = false;
    this.getAccDet();
  }
  ShoweditProfile() {
    this.editProfile = true;
    this.showprofileData = false;
  }
  saveDetails() {
    var inData = {
      account_holder_name: this.accDet.account_holder_name,
      account_number: this.accDet.account_number,
      bank_area: this.accDet.bank_area,
      bank_branch: this.accDet.bank_branch,
      bank_city: this.accDet.bank_city,
      bank_name: this.accDet.bank_name,
      ifsc_code: this.accDet.ifsc_code,
      bussiness_address: this.accDet.bussiness_address,
      bussiness_area: this.accDet.bussiness_area,
      bussiness_city: this.accDet.bussiness_city,
      bussiness_country: this.accDet.bussiness_country,
      bussiness_first_name: this.accDet.bussiness_first_name,
      bussiness_last_name: this.accDet.bussiness_last_name,
      bussiness_mobile_number: this.accDet.bussiness_mobile_number,
      bussiness_name: this.accDet.bussiness_name,
      bussiness_pincode: this.accDet.bussiness_pincode,
      cr_number: this.accDet.cr_number,
      vat_number: this.accDet.vat_number




    }
    this.appService.updateAcc(inData).subscribe(res => {
      // swal(res.json().message, "", "success");
      this.getAccDet();
      this.cancelDetails();
    }, err => {

    })
  }
  // accDet: any;
  getVenData = [];
  venProducts = [];
  prodArr = [];
  getAddedData() {
    this.appService.getAddedData().subscribe((res: any) => {
      // this.getVenData = res.json().data;
      this.getVenData = res.products.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
      // for (var i = 0; i < this.getVenData.length; i++) {
      //     this.venProducts = this.getVenData[i].vendor_products;
      //     // this.prodArr.push(this.venProducts);

      // }
      // console.log(this.venProducts);
    }, err => {

    })
  }
}
