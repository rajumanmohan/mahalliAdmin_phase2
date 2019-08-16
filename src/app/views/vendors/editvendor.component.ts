import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare let swal: any;

import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.scss']
})
export class EditvendorComponent implements OnInit {
  vendorId;
  vendors = [];
  vendorData: any = [];
  first_name;
  last_name;
  mobile_number;
  email;
  commission_to_admin;
  activeImageUrl = null;
  vendorForm: FormGroup;
  submitted = false;
  // vendorData=[]
  constructor(public router: Router, private appService: AppService, private route: ActivatedRoute,private formBuilder:FormBuilder) {
    this.route.queryParams.subscribe(params => {
      this.vendorId = params.vendorId
    });
  }

  backtovendors() {
    this.router.navigate(['/vendorslist']);
  }
  ngOnInit() {
	  let vald={
			 first_name: ['', Validators.required],
			 last_name:  ['',Validators.required],
			 email: ['', Validators.required],
			 mobile_number: ['', Validators.required],
			 bussiness_name: ['', Validators.required],
			 bussiness_from_time: ['', Validators.required],
			 bussiness_end_time: ['', Validators.required],
			 bussiness_houseno: ['', Validators.required],
			 Road_No: ['', Validators.required],
			 Block_No: ['', Validators.required],
			 bussiness_area: ['', Validators.required],
			 bussiness_city: ['', Validators.required],
			 bussiness_pincode: ['', Validators.required],
			 bussiness_country: ['', Validators.required],
			 bank_name: ['', Validators.required],
			 account_holder_name: ['', Validators.required],
			 account_number: ['', Validators.required],
			 ifsc_code: ['', Validators.required],
			 bank_branch: ['', Validators.required],
			 vat_number: ['', Validators.required],
			 cr_number: ['', Validators.required],
			 commission_to_admin: ['', Validators.required]
			 
		 };	   
		   
		   this.vendorForm = this.formBuilder.group(vald);
    this.getVendors();
  }
  getVendors() {
    this.appService.getVendorsList().subscribe((resp: any) => {
      this.vendors = resp.data;
      for (var i = 0; i < this.vendors.length; i++) {
        if (this.vendorId == this.vendors[i].id) {
          this.vendorData = this.vendors[i];

          if (!!this.vendorData.image_one) {
            this.activeImageUrl = this.vendorData.image_one;
          }
          else if (!!this.vendorData.image_two) {
            this.activeImageUrl = this.vendorData.image_two;
          }
          else if (!!this.vendorData.image_three) {
            this.activeImageUrl = this.vendorData.image_three;
          }
          else if (!!this.vendorData.image_four) {
            this.activeImageUrl = this.vendorData.image_four;
          }

          // this.first_name = this.vendors[i].first_name;
          // this.last_name = this.vendors[i].last_name;
          // this.mobile_number = this.vendors[i].mobile_number;
          // this.email = this.vendors[i].email;
          // this.commission_to_admin = this.vendors[i].commission_to_admin;
          // return
        }
      }
    })
  }
  account_holder_name;
  account_number;
  bank_area;
  bank_branch;
  bank_city;
  bank_name;
  bussiness_address;
  bussiness_area;
  bussiness_city;
  bussiness_country;
  bussiness_end_time;
  bussiness_from_time;
  bussiness_houseno;
  bussiness_last_name;
  bussiness_mobile_number;
  bussiness_name;
  bussiness_pincode;
  cr_number;
  ifsc_code;
  vat_number;
  // mobile_number;
  updateVendorbyId1() {
	  this.submitted = true;
	if (this.vendorForm.invalid) {
        return;
    }
    var params = {
      "id": this.vendorId,
      'first_name': this.vendorData.first_name,
      'last_name': this.vendorData.last_name,
      'mobile_number': this.vendorData.mobile_number,
      'email': this.vendorData.email,
      'commission_to_admin': this.vendorData.commission_to_admin,
      "account_holder_name": this.vendorData.account_holder_name,
      "account_number": this.vendorData.account_number,
      "bank_area": this.vendorData.bank_area,
      "bank_branch": this.vendorData.bank_branch,
      "bank_city": this.vendorData.bank_city,
      "bank_name": this.vendorData.bank_name,
      "bussiness_address": this.vendorData.bussiness_address,
      "bussiness_area": this.vendorData.bussiness_area,
      "bussiness_city": this.vendorData.bussiness_city,
      "bussiness_country": this.vendorData.bussiness_country,
      // bussiness_email: ""
      "bussiness_end_time": this.vendorData.bussiness_end_time,
      // bussiness_first_name: ""
      "bussiness_from_time": this.vendorData.bussiness_from_time,
      "bussiness_houseno": this.vendorData.bussiness_houseno,
      "bussiness_last_name": this.vendorData.bussiness_last_name,
      // bussiness_latitude: 26.252967
      // bussiness_longitude: 50.609952
      "bussiness_mobile_number": this.vendorData.bussiness_mobile_number,
      "bussiness_name": this.vendorData.bussiness_name,
      "bussiness_pincode": this.vendorData.bussiness_pincode,
      // "commission_to_admin": this.vendorData.commission_to_admin,
      "cr_number": this.vendorData.cr_number,
      // "email": this.vendorData.email,
      // "first_name":this.vendorData.first_name,
      "ifsc_code": this.vendorData.ifsc_code,
      // image_four: "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ40"
      // image_one: "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ40"
      // image_three: "/9j/4SmhRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAeAAAAcgEyAAIAAAAUAAAAkIdpAAQAAAABAAAApAAAANAACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykAMjAxODowODoxNyAyMDoyNjoxNgAAA6ABAAMAAAABAAEAAKA"
      // image_two: "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ40"
      // last_name: "Cold"
      // "mobile_number": this.vendorData.mobile_number,
      // otp: 6268
      // password: "$2a$10$fc5iDjfCS3IXQkg69Ubt2efX4kMB/4mF/BPE1Th.DdsNudBXYf92."
      // rating: 0
      // retype_account_number: "0"
      // retype_password: ""
      // role: "vendor"
      // shop_status: "1"
      // time: ""
      "vat_number": this.vendorData.vendorDatavat_number,
      "Road_No": this.vendorData.Road_No,
      "Block_No": this.vendorData.Block_No
    }
    this.appService.updateVendorbyId(params, this.vendorId).subscribe((resp: any) => {
      if (resp.status == 200) {
        swal('update vendor successfully', '', 'success');
        this.router.navigate(['/vendorslist']);
      }
    })
  }
}
