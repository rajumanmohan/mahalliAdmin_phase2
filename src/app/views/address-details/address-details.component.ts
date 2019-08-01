import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  showprofileData = true;
  editProfile = false;
  showEditAddress = false;
  typeval;
  constructor(private appService: AppService) { }
  getAddData = [];
  // editAddData = [];
  editAddData = {
    full_name: '',
    mobile_number: '',
    house_no: '',
    landmark: '',
    city: '',
    state: '',
    pin_code: '',

  };
  addId;
  ngOnInit() {
    this.getAdd();
  }
  getAdd() {
    this.appService.getAddress().subscribe((res: any) => {
      this.getAddData = res.delivery_address;

    })
  }
  delete(delId) {
    // swal("Do you want to delete?", "", "warning", {
    //     buttons: ["Cancel!", "Okay!"],
    // }).then((value) => {
    //     if (value === true) {
    this.appService.delAddress(delId).subscribe((res: any) => {
      // swal(res.json().message, "", "success");
      if (res.status == 200) {
        Swal.fire(res.message, '', "success");

        this.getAdd();
      } else {
        Swal.fire(res.message, '', "error");

      }

    })
    // } else {
    //     return;
    // }
  };
  editAdd(addId) {
    this.addId = addId;
    this.showprofileData = false;
    this.showEditAddress = true;
    this.appService.getAddress().subscribe((resp: any) => {
      this.editAddData = resp.delivery_address[0];
    }, err => {

    })
  }
  // UpdateAdd() {
  //   this.showprofileData = false;
  //   this.showEditAddress = true;
  // }
  Type(type) {
    this.typeval = type || 'Shop';
  }
  UpdateAdd() {
    var indata = {
      "full_name": this.editAddData.full_name,
      "mobile_number": this.editAddData.mobile_number,
      "house_no": this.editAddData.house_no,
      "city": this.editAddData.city,
      "state": this.editAddData.state,
      "landmark": this.editAddData.landmark,
      "pin_code": this.editAddData.pin_code,
      "address_type": this.typeval
    }
    this.appService.updateAddData(indata, this.addId).subscribe((resp: any) => {
      Swal.fire(resp.message, '', "success");

      this.getAdd();
      this.cancelDetails();
    }, err => {

    })
  }
  cancelDetails() {
    this.showprofileData = true;
    this.showEditAddress = false;
  }
}
