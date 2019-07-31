import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
declare let swal: any;

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {
  catmarked = false;
  subcatmarked = false;
  couponmarked = false;
  products = false;
  userList = false;
  vendorList = false;
  wholeList = false;
  venOrd = false;
  userOrd = false;
  content = false;
  staff = false;
  notifcts = false;
  banners = false;
  role;
  address;
  city;
  area;
  zip;
  mobileNum;
  email;
  password;
  commision;
  Id;
  constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.Id = params.Id
    });

  }

  ngOnInit() {
    // console.log(this.marked);
    this.getStaff();
  }
  staffData: any = [];
  stafflist: any = [];
  getStaff() {
    this.appService.getStaff().subscribe((res: any) => {
      this.stafflist = res.data;
      for (var i = 0; i < this.stafflist.length; i++) {
        if (this.Id == this.stafflist[i].id) {
          this.staffData = this.stafflist[i];

        }
      }
    })
  }



  backtostaff() {
    this.router.navigate(['/staff'])
  }
  name;
  toggleVisibility(e) {
    this.catmarked = e.target.checked;
  }
  toggleVisibility1(e) {
    this.subcatmarked = e.target.checked;
  }
  toggleVisibility2(e) {
    this.couponmarked = e.target.checked;
  }
  toggleVisibility3(e) {
    this.products = e.target.checked;
  }
  toggleVisibility4(e) {
    this.banners = e.target.checked;
  }
  toggleVisibility5(e) {
    this.userList = e.target.checked;
  }
  toggleVisibility6(e) {
    this.vendorList = e.target.checked;
  }
  toggleVisibility7(e) {
    this.wholeList = e.target.checked;
  }
  toggleVisibility8(e) {
    this.venOrd = e.target.checked;
  }
  toggleVisibility9(e) {
    this.userOrd = e.target.checked;
  }
  toggleVisibility10(e) {
    this.content = e.target.checked;
  }
  toggleVisibility11(e) {
    this.commision = e.target.checked;
  }
  toggleVisibility12(e) {
    this.notifcts = e.target.checked;
  }
  changeRole(role) {
    this.role = role
  }
  addStaff() {
    var inData = {
      "name": this.staffData.name,
      "select_city": this.staffData.select_city,
      "area": this.staffData.area,
      "address": this.staffData.address,
      "zip_code": this.staffData.zip_code,
      "mobile_number": this.staffData.mobile_number,
      "email": this.staffData.email,
      "password": this.staffData.password,
      "role_name": this.staffData.role_name,
      "status": 1,
      "Categories": JSON.stringify(this.catmarked),
      "SubCategory": JSON.stringify(this.subcatmarked),
      "Coupon": JSON.stringify(this.couponmarked),
      "Prodcts": JSON.stringify(this.products),
      "Banners": JSON.stringify(this.banners),
      "UserList": JSON.stringify(this.userList),
      "VendorList": JSON.stringify(this.vendorList),
      "WholeList": JSON.stringify(this.wholeList),
      "vendorOrders": JSON.stringify(this.venOrd),
      'userOrders': JSON.stringify(this.userOrd),
      "Content": JSON.stringify(this.content),
      "commision": JSON.stringify(this.commision),
      "notifications": JSON.stringify(this.notifcts)
    }
    this.appService.addStaff(inData).subscribe((res: any) => {
      console.log(res);
      swal('staff added successfully', '', 'success');
      this.router.navigate(['/staff'])
    })
  }
  updatestaffData() {
    var inData = {
      "id": this.Id,
      "name": this.staffData.name,
      "select_city": this.staffData.select_city,
      "area": this.staffData.area,
      "address": this.staffData.address,
      "zip_code": this.staffData.zip_code,
      "mobile_number": this.staffData.mobile_number,
      "email": this.staffData.email,
      "password": this.staffData.password,
      "role_name": this.staffData.role_name,
      "status": 1,
      "Categories": JSON.stringify(this.catmarked),
      "SubCategory": JSON.stringify(this.subcatmarked),
      "Coupon": JSON.stringify(this.couponmarked),
      "Prodcts": JSON.stringify(this.products),
      "Banners": JSON.stringify(this.banners),
      "UserList": JSON.stringify(this.userList),
      "VendorList": JSON.stringify(this.vendorList),
      "WholeList": JSON.stringify(this.wholeList),
      "vendorOrders": JSON.stringify(this.venOrd),
      'userOrders': JSON.stringify(this.userOrd),
      "Content": JSON.stringify(this.content),
      "commision": JSON.stringify(this.commision),
      "notifications": JSON.stringify(this.notifcts)
    }

    this.appService.updatestaff(inData).subscribe((res: any) => {
      console.log(res);
      swal('staff updated successfully', '', 'success');
      this.router.navigate(['/staff'])
    })
  }

}
