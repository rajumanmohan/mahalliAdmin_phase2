import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ExcelService } from './../../services/excel.service';
// import swal from 'sweetalert';
// import { $ } from 'protractor';
declare var $: any;
declare var jsPDF: any;
@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.scss']
})
export class UserordersComponent implements OnInit {

  constructor(public router: Router, private appService: AppService, private excelService: ExcelService) { }
  userOrds = [];
  type;
  wholeId;
  fromDate;
  toDate;
  myDatePickerOptions;
  // orderdetails() {
  //   this.router.navigate(['/userslist/orderdetails']);
  // }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.getUserOrds();
    this.myDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      // disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
    }
  }
  getUserOrds() {
    this.appService.getUserOrders().subscribe((res: any) => {
      // this.userOrds = res.order;
      this.userOrds = res.order.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  orderDetails(orderId, type) {
    this.type = type;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        orderId: orderId,
        type: this.type,
        wholeId: this.wholeId
      }
    }
    // this.router.navigate(['/userslist/orderdetails']);
    //   this.router.navigate(['/userslist/orderdetails']);
    this.router.navigate(['/userslist/orderdetails'], navigationExtras);

    // this.router.navigate(['/orderDetails'], navigationExtras)
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.userOrds, 'Mahalli');
  }
  onDateChanged(date) {
    this.fromDate = date.formatted;
    // console.log(date)
  }
  onDateChanged1(date) {
    this.toDate = date.formatted;
  }
  Filter() {
    var indata = {
      "startdate": this.fromDate,
      "enddate": this.toDate
    }

    this.appService.filterUserOrders(indata).subscribe((res: any) => {
      // this.userOrds = res.order;
      // swal(res.message,"","success");
      $('#filter2').modal('hide');
      // this.fromDate="";this.toDate='';
      // this.userOrds = res.Orders;
      this.userOrds = res.Orders.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
}
