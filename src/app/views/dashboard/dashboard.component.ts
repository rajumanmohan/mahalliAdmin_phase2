import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AppService } from './../../services/mahali/mahali-data.service';
import { navItems } from '../../_nav';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

import { DatePipe } from '@angular/common';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective, { read: true, static: false }) chart: BaseChartDirective;
  years = [2016, 2017, 2018, 2019]
  year = new Date().getFullYear();
  changeTab = 'year';
  constructor(private appService: AppService, public router: Router, private datePipe: DatePipe) {
    this.router.navigate(['/dashboard']);
  }
  mlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public navItems = navItems;
  public mainChartLegend = false;
  public mainChartType = 'line';
  barChartDataRes: any
  // Admin, wholesaler, vendor
  radioModel: string = 'Month';
  wholeCount = [];
  venCount: [];
  user_orders = [];
  vendor_orders = [];
  role: string;
  vendorCount = 0;
  userCount = 0;
  Count = {};
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 15,
          stepSize: Math.ceil(10 / 10),
          // max: 10
        }
      }]
    },
    annotation: {
      annotations: [
        {

          label: {
            enabled: true,
          }
        },
      ],
    },
    legend: {
      display: false
    }
  };
  public mainChartLabels: Array<any> = [];
  mainChartData: Array<any> = [
    {
      data: [0, 1, 2, 4, 0, 0, 0],
      label: 'User Orders'
    },
    {
      data: [0, 1, 3, 0, 0, 0, 0],
      label: 'Vendor Orders'
    },
    // {
    //   data: this.mainChartData3,
    //   label: 'BEP'
    // }
  ];
  ngOnInit(): void {
    this.role = sessionStorage.role;
    if (sessionStorage.role == 'wholesaler') {
      this.wholeSalerGraph()
      this.getWholeProddsCunt();
    } else if (sessionStorage.role == 'Admin') {
      this.getGraphData();
      this.getAdminCount();
    } else if (sessionStorage.role == 'vendor') {
      this.getGraphData();
      this.getvendorCount();
    }
  }

  getGraphData() {
    this.appService.getGraph({ year: this.year }).subscribe((res: any) => {
      console.log(res);
      this.barChartDataRes = res;
      this.yearly()
    }, err => {

    })
  }
  wholeSalerGraph() {
    //wholesalerId
    this.appService.graphWhole({ year: this.year }).subscribe((res: any) => {
      console.log(res);
      this.barChartDataRes = res;
      this.yearly()
    }, err => {

    })
  }
  vendorGraph() {
    this.appService.graphVendor({ year: this.year }).subscribe((res: any) => {
      console.log(res);
      this.barChartDataRes = res;
      this.yearly()
    }, err => {

    })
  }
  getAdminCount() {
    this.appService.getAdminCount().subscribe((resp: any) => {
      console.log('admin count', resp.data);
      this.Count = resp.data;
      // this.userCount = res.json().data.users;
    })
  }
  getWholeProddsCunt() {
    this.appService.getWholeProddsCunt().subscribe((res: any) => {
      this.wholeCount = res;
      // this.userCount = res.json().data.users;
    })
  }
  getvendorCount() {
    this.appService.getvendorCount().subscribe((res: any) => {
      this.venCount = res;
      // this.userCount = res.json().data.users;
    })
  }
  refreshByYear(year) {
    this.year = year;
    this.getGraphData();
  }

  refresh(flag) {
    this.changeTab = flag;
    if (flag === 'week') {
      this.weekly();
    } else if (flag === 'month') {
      this.mothly();
    } else if (flag === 'year') {
      this.yearly();
    }
  }

  public mothly() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    const monthdays = new Date(year, month, 0).getDate()

    this.mainChartLabels = [];
    let weekUserData = {};
    let weekVendorData = {};
    let userValues = [];
    let vendorValues = [];
    let labels = [];
    for (let i = 1; i <= monthdays; i++) {
      labels.push(i + "/" + month + "/" + year);
    }

    for (let data of (this.barChartDataRes || {}).useroders) {
      if (month === data.month) {
        if (!weekUserData['day-' + data.day]) {
          weekUserData['day-' + data.day] = 0;
        }
        weekUserData['day-' + data.day] += data.order_count;
      }
    }

    for (let data of (this.barChartDataRes || {}).venderoders) {
      if (month === data.month) {
        if (!weekVendorData['day-' + data.day]) {
          weekVendorData['day-' + data.day] = 0;
        }
        weekVendorData['day-' + data.day] += data.order_count;
      }
    }

    for (let i = 1; i <= monthdays; i++) {
      if (weekUserData['day-' + i]) {
        userValues.push(weekUserData['day-' + i]);
      } else {
        userValues.push(0);
      }
    }

    for (let i = 1; i <= 31; i++) {
      if (weekVendorData['day-' + i]) {
        vendorValues.push(weekVendorData['day-' + i]);
      } else {
        vendorValues.push(0);
      }
    }
    this.mainChartLabels = labels;
    this.mainChartData = [{
      data: userValues,
      label: 'User Orders',
      borderWidth: 0
    },
    {
      data: vendorValues,
      label: 'Vendor Orders',
      borderWidth: 0
    }];
  }

  public weekly() {
    var currentTime = new Date();

    let date = new Date();
    var month = currentTime.getMonth() + 1
    var year = currentTime.getFullYear();
    let today = date.getDate();
    let befor7 = date.getDate() - 6;
    let weekLables = [];
    let labels = [];
    for (let i = befor7; i <= today; i++) {
      labels.push(i + "/" + month + "/" + year);
      weekLables.push(i)
    }
    let monthUserData = {};
    let monthVendorData = {};
    let userValues = [];
    let vendorValues = [];

    for (let data of (this.barChartDataRes || {}).useroders) {
      if (!monthUserData['day-' + data.day]) {
        monthUserData['day-' + data.day] = 0;
      }
      monthUserData['day-' + data.day] += data.order_count;
    }
    for (let data of (this.barChartDataRes || {}).venderoders) {
      if (!monthVendorData['day-' + data.day]) {
        monthVendorData['day-' + data.day] = 0;
      }
      monthVendorData['day-' + data.day] += data.order_count;
    }
    for (let day of weekLables) {
      if (monthUserData['day-' + day]) {
        userValues.push(monthUserData['day-' + day]);
      } else {
        userValues.push(0);
      }
    }
    for (let day of weekLables) {
      if (monthVendorData['day-' + day]) {
        vendorValues.push(monthVendorData['day-' + day]);
      } else {
        vendorValues.push(0);
      }
    }
    this.mainChartLabels = labels;
    this.mainChartData = [{
      data: userValues,
      label: 'User Orders',
      borderWidth: 0
    },
    {
      data: vendorValues,
      label: 'Vendor Orders',
      borderWidth: 0
    }];
  }
  public yearly() {
    this.mainChartLabels = [];
    let monthUserData = {};
    let monthVendorData = {};
    let userValues = [];
    let vendorValues = [];
    this.userCount = 0;
    this.vendorCount = 0;
    if (!(this.barChartDataRes || {}).useroders) {
      this.barChartDataRes.useroders = []
    }
    if (!(this.barChartDataRes || {}).venderoders) {
      this.barChartDataRes.venderoders = [];
    }

    for (let data of (this.barChartDataRes || {}).useroders) {
      if (!monthUserData[this.mlist[data.month]]) {
        monthUserData[this.mlist[data.month]] = 0;
      }
      this.userCount += data.order_count
      monthUserData[this.mlist[data.month]] += data.order_count;
    }
    for (let data of (this.barChartDataRes || {}).venderoders) {
      if (!monthVendorData[this.mlist[data.month]]) {
        monthVendorData[this.mlist[data.month]] = 0;
      }
      this.vendorCount += data.order_count;
      monthVendorData[this.mlist[data.month]] += data.order_count;
    }

    for (let month of this.mlist) {
      if (monthUserData[month]) {
        userValues.push(monthUserData[month]);
      } else {
        userValues.push(0);
      }
    }
    for (let month of this.mlist) {
      if (monthVendorData[month]) {
        vendorValues.push(monthVendorData[month]);
      } else {
        vendorValues.push(0);
      }
    }
    console.log(userValues)
    console.log(vendorValues)
    this.mainChartLabels = this.mlist;
    this.mainChartData = [{
      data: userValues,
      label: 'User Orders',
      borderWidth: 0
    },
    {
      data: vendorValues,
      label: 'Vendor Orders',
      borderWidth: 0
    }];
  }


}
