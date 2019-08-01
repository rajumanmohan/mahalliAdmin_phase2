import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delivery-slots',
  templateUrl: './delivery-slots.component.html',
  styleUrls: ['./delivery-slots.component.scss']
})
export class DeliverySlotsComponent implements OnInit {

  constructor(private appService: AppService) { }
  delSlots = [];
  AddSlot = false;
  showDel = true;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.getDelSlots();
  }
  getDelSlots() {
    this.appService.getDelSlots().subscribe((resp: any) => {
      // this.delSlots = resp..delivery_slots;
      this.delSlots = resp.delivery_slots.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  from_date;
  to_date;
  standDel;
  expressDel;
  addSlot() {
    this.AddSlot = true;
    this.showDel = false;
  }
  AddDeliverySlots() {
    // if(this.to_date || this.from_date == ''){
    //     swal("Plase select time","","warning");
    // }else {
    var inData = {
      "vendor_id": sessionStorage.vemdorId,
      "start_time": this.from_date,
      "end_time": this.to_date,
      "slot_name": this.from_date + "-" + this.to_date,
      // "type": "grocery"
    }

    // }else {
    this.appService.AddSlots(inData).subscribe((res: any) => {
      if (res.status == 200) {
        Swal.fire(res.message, '', "success");
        this.AddSlot = false;
        this.showDel = true;
        this.getDelSlots();
      } else {
        Swal.fire(res.message, '', "error");
        // swal(res.json().message, "", "error");

      }


    })
    this.to_date = this.from_date = ''
    // }
    // }

  }
  deleteSlot(Id) {
    this.appService.delDelSlot(Id).subscribe((resp: any) => {
      if (resp.status == 200) {
        Swal.fire(resp.message, '', "success");
        // swal(resp..message, "", "success");
        this.getDelSlots();
      }

    })
  }
  AddDelCharges() {
    var inData = {
      "vendor_id": sessionStorage.vemdorId,
      "standard_delivery": this.standDel,
      "express_delivery": this.expressDel
    }
    // if ((this.standDel)  ! = undefined  || (this.expressDel !=undefined)) {
    this.appService.AdddelCharges(inData).subscribe((res: any) => {
      if (res.status == 200) {
        Swal.fire(res.message, '', "success");
        // swal(res.json().message, "", "success");
        this.AddSlot = false;
        this.showDel = true;
        this.standDel = this.expressDel = '';
      } else {
        Swal.fire(res.message, '', "error");
        // swal(res.json().message, "", "error");

      }

    })
    // }
    //  else {
    //     swal("Required Fields are missing", "", "warning");
    // }
  }

}
