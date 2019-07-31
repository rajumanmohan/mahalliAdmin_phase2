import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ExcelService } from './../../services/excel.service';
declare var $: any;
declare let jsPDF;
@Component({
  selector: 'app-vendororders',
  templateUrl: './vendororders.component.html',
  styleUrls: ['./vendororders.component.scss']
})
export class VendorordersComponent implements OnInit {
  constructor(public router: Router, private appService: AppService, private excelService: ExcelService) { }

  orderdetails() {
    this.router.navigate(['/vendorslist/vendorordersdetails']);
  }
  key: string = 'name';
  reverse: boolean = true;
  myDatePickerOptions;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  orders = [];
  type;
  ngOnInit() {
    this.myDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      // disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
    }
    if (sessionStorage.vemdorId) {
      this.getAllVendorOrders1();
    } else if (sessionStorage.wholesalerId) {
      this.wholeOrders();
    }
    else {
      this.getAllVendorOrders();

    }
  }
  getAllVendorOrders() {
    this.appService.getAllVendorOrds().subscribe((res: any) => {
      // this.orders = res.Orders;
      this.orders = res.Orders.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    }, error => {

    })
  }
  wholeOrders() {
    this.appService.getWholeOrders().subscribe((res: any) => {
      this.orders = res.finalarray;
    }, error => {

    })
  }
  getAllVendorOrders1() {
    this.appService.getPlaceOrder().subscribe((res: any) => {
      // this.orders = res.Orders;
      this.orders = res.Orders.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    }, error => {

    })
  }
  orderDetails(orderId) {
    // this.type = type;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        orderId: orderId,
        // type: this.type,
        // wholeId: this.wholeId
      }
    }
    this.router.navigate(['vendorslist/vendorordersdetails'], navigationExtras)
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.orders, 'Mahalli');
  }
  fromDate;
  toDate;
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

    this.appService.filterVendorOrders(indata).subscribe((res: any) => {
      // this.userOrds = res.order;
      // swal(res.message,"","success");
      $('#filter2').modal('hide');
      // this.fromDate="";this.toDate='';
      this.orders = res.Orders;
    })
  }

  exportAsPdf() {
    let fields = Object.keys(this.orders[0]);
    console.log('fields', fields);
    let tableCol = [];
    for (let f of fields) {
      tableCol.push({ title: f, dataKey: f });
    }
    // Document of 210mm wide and 297mm high
    var doc = new jsPDF('l', 'pt', [1200, 500]);
    // if (tableCol.length > 20) {
    //   doc = new jsPDF('l', 'in', [15, 40]);
    // } else if (tableCol.length > 15) {
    //   doc = new jsPDF('l', 'in', [15, 30]);
    // } else if (tableCol.length > 10) {
    //   doc = new jsPDF('l', 'in', [15, 20]);
    // } else if (tableCol.length > 5) {
    //   doc = new jsPDF('l', 'in', [15, 15]);
    // }
    doc.setFontSize(12);
    doc.text('Reports', 40, 20);
    doc.setFontSize(10);
    doc.autoTable(tableCol, this.orders, {
      autoSize: true,
      printHeaders: true, startY: 40, headerStyles: { fillColor: [100] }
    });
    doc.save('order_report_' + new Date());
  }
}
