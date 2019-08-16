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

  exportAsPdf() {

    
    var tempUserOrderList = JSON.parse(JSON.stringify( this.userOrds));
    tempUserOrderList.filter(x=> {delete x.user_id; delete x.vendor_id; delete x.delivery_address_id; delete x.delivery_slot_id; 
      delete x.status; delete x.indexValue});
   
      if(tempUserOrderList.length == 0){
        return false;
      }
  
    let fields = Object.keys(tempUserOrderList[0]);
    console.log('fields', fields);
    let tableCol = [];
    for (let f of fields) {
      tableCol.push({ title: f, dataKey: f });
    }
  
    var doc = new jsPDF('l', 'pt', [1200, 500]);
   
    doc.setFontSize(12);
    doc.text('Reports', 40, 20);
    doc.setFontSize(10);
    doc.autoTable(tableCol, tempUserOrderList, {
    
      printHeaders: true, startY: 40, headerStyles: { fillColor: [100] }
    });
    doc.save('user_order_report_' + new Date());
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
