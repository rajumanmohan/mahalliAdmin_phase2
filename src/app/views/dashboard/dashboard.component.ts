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
import * as moment from 'moment';
import { IfStmt } from '@angular/compiler';


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
  wholeSaleDataRes: any;
  userRes: any;
  // Admin, wholesaler, vendor
  radioModel: string = 'Month';
  wholeCount = [];
  venCount: [];
  user_orders = [];
  vendor_orders = [];
  role: string;
  vendorCount = 0;
  userCount = 0;
  vendorWholesaleCount = 0;
  userWholesaleCount = 0;
  totalUserCount = 0;
  Count = {};
  UserData = [];
  VendorsData = [];
  SellersData = [];
  WholeSellersData = []
  CategoriesData = []
  ProductsData = [];
  CouponData = [];
  productCatsData: any;
  productscount = 0;
  catagiriescount = 0;

  vendorOrdersData: any;
  userOrdersData: any;

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

  mainWholeSaleData: Array<any> = [
    {
      data: [0, 1, 2, 4, 0, 0, 0],
      label: 'User Orders'
    },
    {
      data: [0, 1, 3, 0, 0, 0, 0],
      label: 'Vendor Orders'
    },
  ]
  mainProductCatsData: Array<any> = [
    {
      data: [0, 1, 2, 4, 0, 0, 0],
      label: 'User Orders'
    },
    {
      data: [0, 1, 3, 0, 0, 0, 0],
      label: 'Vendor Orders'
    },
  ]
  mainUserData: Array<any> = [
    {
      data: [0, 1, 2, 4, 0, 0, 0],
      label: 'User Orders'
    }
  ]
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit(): void {
    this.role = sessionStorage.role;
    if (sessionStorage.role == 'wholesaler') {
      this.wholeSalerGraph()
      this.getWholeProddsCunt();
    } else if (sessionStorage.role == 'Admin') {
      this.getGraphData();
      this.getWholeSaleGraphData();
      this.getVendorOrdersLatest10();
      this.getUserOrdersLatest10();
      this.getAdminCount();
      this.getUserData();
      this.getUserLatest10();
      this.getWholeSellerTen();
      this.getCategoriesTen();
      this.getSellers10();
      this.getProductsLatest10();
      this.getCoupnsData10();
     
      this.getProductCatsData();
    } else if (sessionStorage.role == 'vendor') {
      this.getvendorCount();

    }
    // if (sessionStorage.role == 'vendor') {
    //   window.open("https://www.mahalli.com/mahaliVendorGrocery/", "_blank");

    // }
  }

  getGraphData() {
    this.appService.getGraph({ year: this.year }).subscribe((res: any) => {
      this.barChartDataRes = res;
      console.log("this.barChartDataRes..", this.barChartDataRes)
      this.yearly()
    }, err => {

    })
  }

  // Wholesale Graph 
  getWholeSaleGraphData() {

    this.appService.getWholeSaleGraph({ year: this.year }).subscribe((res: any) => {
      this.wholeSaleDataRes = res;
      console.log("this.wholeSaleDataRes", this.wholeSaleDataRes)
      this.yearly();
    }, err => {

    })
  }
  // User Graph
  getUserData() {
    this.appService.getUserSaleGraph({ year: this.year }).subscribe((res: any) => {
      this.userRes = res;
      console.log(this.userRes)
      this.yearly();
    }, err => {

    })
  }

  //User latest 10

  getUserLatest10() {
    this.appService.getUserData().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.UserData = res.data.splice(0, 10);
        }
        else {
          this.UserData = res.data;
        }


      }


    }, err => {

    })
  }
  getSellers10() {
    this.appService.getVendorsData().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.SellersData = res.data.splice(0, 10);
        }
        else {
          this.SellersData = res.data;
        }


      }



    }, err => {

    })
  }
  getWholeSellerTen() {
    this.appService.getWholeSellersData().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.WholeSellersData = res.data.splice(0, 10);
        }
        else {
          this.WholeSellersData = res.data;
        }


      }



    }, err => {

    })
  }
  getCategoriesTen() {
    this.appService.getCategoriesData().subscribe((res: any) => {

      if (res.result) {
        if (res.result.length > 10) {
          this.CategoriesData = res.result.splice(0, 10);
        }
        else {
          this.CategoriesData = res.result;
        }


      }



    }, err => {

    })
  }
  getProductsLatest10() {
    this.appService.getProductsLatestData().subscribe((res: any) => {

      if (res.products) {
        if (res.products.length > 10) {
          this.ProductsData = res.products.splice(0, 10);
        }
        else {
          this.ProductsData = res.products;
        }
        this.ProductsData.forEach(x => {
          if (x.sku_images) {
            if (x.sku_images.length) {
              x.Img = x.sku_images[0].sku_image;
            }
          }
        })

      }



    }, err => {

    })
  }

  getUserOrdersLatest10() {
    this.appService.getUserOrders().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.userOrdersData = res.data.splice(0, 10);
        }
        else {
          this.userOrdersData = res.data;
        }
        console.log("userordersdata" + this.userOrdersData);
      }

    }, err => {

    })

  }

  getVendorOrdersLatest10() {
    this.appService.vendorOrders().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.vendorOrdersData = res.data.splice(0, 10);
        }
        else {
          this.vendorOrdersData = res.data;
        }
        console.log("vendorOrders" + this.vendorOrdersData);
      }

    }, err => {

    })

  }

  getCoupnsData10() {
    this.appService.getCoupnsLatestData().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.CouponData = res.data.splice(0, 10);
        }
        else {
          this.CouponData = res.data;
        }


      }



    }, err => {

    })
  }
  getOrdersData10() {
    this.appService.getOrdersLatestData().subscribe((res: any) => {

      if (res.data) {
        if (res.data.length > 10) {
          this.CouponData = res.data.splice(0, 10);
        }
        else {
          this.CouponData = res.data;
        }


      }



    }, err => {

    })
  }
  wholeSalerGraph() {
    //wholesalerId
    this.appService.graphWhole({ year: this.year }).subscribe((res: any) => {

      this.barChartDataRes = res;
      this.yearly()
    }, err => {

    })
  }
  vendorGraph() {
    this.appService.graphVendor({ year: this.year }).subscribe((res: any) => {

      this.barChartDataRes = res;
      this.yearly()
    }, err => {

    })
  }
  //get Products and Cats Data
  getProductCatsData() {
    this.appService.getProductCatsData({ year: this.year }).subscribe((res: any) => {
      this.productCatsData = res;
      console.log("this.productCatsData", this.productCatsData)
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
    let weekUserGraphData = {};
    let userValues = [];
    let vendorValues = [];
    let labels = [];
    let wholeSaleData = {};
    let wholeSaleVendorData = [];
    let userData = [];
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
    // for (let day of labels) {
    //   if (weekUserData['day-' + day]) {
    //     userValues.push(weekUserData['day-' + day]);
    //   } else {
    //     userValues.push(0);
    //   }
    // }

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
    /**User Graph */
    let userGraphValues = [];
    for (let data of (this.userRes || {}).userdata) {
      if (month === data.month) {
        if (!weekUserGraphData['day-' + data.day]) {
          weekUserGraphData['day-' + data.day] = 0;
        }
        weekUserGraphData['day-' + data.day] += data.order_count;
      }
    }

    for (let i = 1; i <= monthdays; i++) {
      if (weekUserGraphData['day-' + i]) {
        userGraphValues.push(weekUserGraphData['day-' + i]);
      } else {
        userGraphValues.push(0);
      }
    }


    this.mainChartLabels = labels;
    this.mainUserData = [{
      data: userGraphValues,
      label: 'User Orders',
      borderWidth: 0
    }];

    let wholeSaleValues = [];
    let wholeSaleVendorValues = [];

    /**Whole sale data */
    for (let data of (this.wholeSaleDataRes || {}).wholesalerdata) {
      if (month === data.month) {
        if (!wholeSaleData['day-' + data.day]) {
          wholeSaleData['day-' + data.day] = 0;
        }
        wholeSaleData['day-' + data.day] += data.wholesaler_count;
      }
    }

    for (let data of (this.wholeSaleDataRes || {}).vendordata) {
      if (month === data.month) {
        if (!wholeSaleVendorData['day-' + data.day]) {
          wholeSaleVendorData['day-' + data.day] = 0;
        }
        wholeSaleVendorData['day-' + data.day] += data.vendor_count;
      }
    }
    for (let i = 1; i <= monthdays; i++) {
      if (wholeSaleData['day-' + i]) {
        wholeSaleValues.push(wholeSaleData['day-' + i]);
      } else {
        wholeSaleValues.push(0);
      }
    }

    for (let i = 1; i <= 31; i++) {
      if (wholeSaleVendorData['day-' + i]) {
        wholeSaleVendorValues.push(wholeSaleVendorData['day-' + i]);
      } else {
        wholeSaleVendorValues.push(0);
      }
    }



    this.mainWholeSaleData = [
      {
        data: wholeSaleValues,
        label: 'User Orders',
        borderWidth: 0
      },
      {
        data: wholeSaleVendorValues,
        label: 'Vendor Orders',
        borderWidth: 0
      }
    ]
  }

  public weekly() {
    var currentTime = new Date();

    let date = new Date();
    var month = currentTime.getMonth() + 1
    var year = currentTime.getFullYear();
    let today = date.getDate();
    let befor7 = date.getDate() - 6;
    var dateTo = moment().endOf('week');
    var dateFrom = moment().startOf('week');

    let weekLables = [];
    let labels = [];
    let tempLabels = []

    let tempDate = dateFrom;
    while (tempDate.isSameOrBefore(dateTo)) {

      tempLabels.push(tempDate.format("DD/MM/YYYY"));
      weekLables.push(Number(tempDate.format('D')))
      tempDate = tempDate.add(1, 'd');

    }

    console.log(tempLabels);
    labels = tempLabels;

    // for (let i = befor7; i <= today; i++) {
    //   labels.push(i + "/" + month + "/" + year);
    //   weekLables.push(i)
    // }
    let monthUserData = {};
    let monthVendorData = {};
    let userValues1 = [];
    let vendorValues1 = [];
    let monthWholesaleUserData = {};
    let monthWholesaleVendorData = {};
    let userWholesaleValues = [];
    let vendorWholesaleValues = [];

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
        userValues1.push(monthUserData['day-' + day]);
      } else {
        userValues1.push(0);
      }
    }
    for (let day of weekLables) {
      if (monthVendorData['day-' + day]) {
        vendorValues1.push(monthVendorData['day-' + day]);
      } else {
        vendorValues1.push(0);
      }
    }
    this.mainChartLabels = labels;
    this.mainChartData = [{
      data: userValues1,
      label: 'User Orders',
      borderWidth: 0
    },
    {
      data: vendorValues1,
      label: 'Vendor Orders',
      borderWidth: 0
    }];

    /**Whole sale data */
    for (let data of (this.wholeSaleDataRes || {}).wholesalerdata) {
      if (!monthWholesaleUserData['day-' + data.day]) {
        monthWholesaleUserData['day-' + data.day] = 0;
      }
      monthWholesaleUserData['day-' + data.day] += data.wholesaler_count;
    }
    for (let data of (this.wholeSaleDataRes || {}).vendordata) {
      if (!monthWholesaleVendorData['day-' + data.day]) {
        monthWholesaleVendorData['day-' + data.day] = 0;
      }
      monthWholesaleVendorData['day-' + data.day] += data.vendor_count;
    }
    for (let day of weekLables) {
      if (monthWholesaleUserData['day-' + day]) {
        userWholesaleValues.push(monthWholesaleUserData['day-' + day]);
      } else {
        userWholesaleValues.push(0);
      }
    }
    for (let day of weekLables) {
      if (monthWholesaleVendorData['day-' + day]) {
        vendorWholesaleValues.push(monthWholesaleVendorData['day-' + day]);
      } else {
        vendorWholesaleValues.push(0);
      }
    }
    this.mainChartLabels = labels;
    this.mainWholeSaleData = [{
      data: userWholesaleValues,
      label: 'User Orders',
      borderWidth: 0
    },
    {
      data: vendorWholesaleValues,
      label: 'Vendor Orders',
      borderWidth: 0
    }];

    /** user data */
    let monthGraphUserData = {};
    let userGraphValues = [];
    for (let data of (this.userRes || {}).userdata) {
      if (!monthGraphUserData['day-' + data.day]) {
        monthGraphUserData['day-' + data.day] = 0;
      }
      monthGraphUserData['day-' + data.day] += data.order_count;
    }
    for (let day of weekLables) {
      if (monthGraphUserData['day-' + day]) {
        userGraphValues.push(monthGraphUserData['day-' + day]);
      } else {
        userGraphValues.push(0);
      }
    }
    this.mainChartLabels = labels;
    this.mainUserData = [{
      data: userGraphValues,
      label: 'User Orders',
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
    let monthWholesaleUserData = {};
    let monthWholesaleVendorData = {};
    let userWholesaleValues = [];
    let vendorWholesaleValues = [];
    this.userCount = 0;
    this.vendorCount = 0;
    this.userWholesaleCount = 0;
    this.vendorWholesaleCount = 0;
    this.totalUserCount = 0;


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
    console.log("userValues", userValues)
    console.log("vendorValues", vendorValues)
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

    console.log("mainChart..", this.mainChartData)

    /**Wholesale Data */
    if (!(this.wholeSaleDataRes || {}).wholesalerdata) {
      this.wholeSaleDataRes.useroders = []
    }
    if (!(this.wholeSaleDataRes || {}).vendordata) {
      this.wholeSaleDataRes.venderoders = [];
    }

    for (let data of (this.wholeSaleDataRes || {}).wholesalerdata) {
      if (!monthWholesaleUserData[this.mlist[data.month]]) {
        monthWholesaleUserData[this.mlist[data.month]] = 0;
      }
      this.userWholesaleCount += data.wholesaler_count
      monthWholesaleUserData[this.mlist[data.month]] += data.wholesaler_count;
    }
    for (let data of (this.wholeSaleDataRes || {}).vendordata) {
      if (!monthWholesaleVendorData[this.mlist[data.month]]) {
        monthWholesaleVendorData[this.mlist[data.month]] = 0;
      }
      this.vendorWholesaleCount += data.vendor_count;
      monthWholesaleVendorData[this.mlist[data.month]] += data.vendor_count;
    }
    for (let month of this.mlist) {
      if (monthWholesaleUserData[month]) {
        userWholesaleValues.push(monthWholesaleUserData[month]);
      } else {
        userWholesaleValues.push(0);
      }
    }
    for (let month of this.mlist) {
      if (monthWholesaleVendorData[month]) {
        vendorWholesaleValues.push(monthWholesaleVendorData[month]);
      } else {
        vendorWholesaleValues.push(0);
      }
    }

    this.mainWholeSaleData = [{
      data: userWholesaleValues,
      label: 'Wholesalar',
      borderWidth: 0
    },
    {
      data: vendorWholesaleValues,
      label: 'Vendor',
      borderWidth: 0
    }];

    /**User Data */
    let monthGraphUserData = {};
    let userGraphValues = [];
    if (!(this.userRes || {}).userdata) {
      this.userRes.userdata = []
    }

    for (let data of (this.userRes || {}).userdata) {
      if (!monthGraphUserData[this.mlist[data.month]]) {
        monthGraphUserData[this.mlist[data.month]] = 0;
      }
      this.totalUserCount += data.order_count
      monthGraphUserData[this.mlist[data.month]] += data.order_count;
    }

    for (let month of this.mlist) {
      if (monthGraphUserData[month]) {
        userGraphValues.push(monthGraphUserData[month]);
      } else {
        userGraphValues.push(0);
      }
    }

    this.mainUserData = [{
      data: userGraphValues,
      label: 'User',
      borderWidth: 0
    }];

    /** Prodcuts and Cats Data Graph */
    let monthGraphCatData = {};
    let catGraphValues = [];
    let monthGraphProductData = {};
    let productGraphValues = [];
    let monthProductCatData = {};
    let monthProductCatVendorData = {};

    if (!(this.productCatsData || {}).categoriesdetails) {
      this.barChartDataRes.useroders = []
    }
    if (!(this.productCatsData || {}).productdetails) {
      this.barChartDataRes.venderoders = [];
    }

    for (let data of (this.productCatsData || {}).categoriesdetails) {
      if (!monthProductCatData[this.mlist[data.month]]) {
        monthProductCatData[this.mlist[data.month]] = 0;
      }
      this.catagiriescount += data.categories_count
      monthProductCatData[this.mlist[data.month]] += data.categories_count;
    }
    for (let data of (this.productCatsData || {}).productdetails) {
      if (!monthProductCatVendorData[this.mlist[data.month]]) {
        monthProductCatVendorData[this.mlist[data.month]] = 0;
      }
      this.productscount += data.product_count;
      monthProductCatVendorData[this.mlist[data.month]] += data.product_count;
    }
    for (let month of this.mlist) {
      if (monthProductCatData[month]) {
        catGraphValues.push(monthProductCatData[month]);
      } else {
        catGraphValues.push(0);
      }
    }
    for (let month of this.mlist) {
      if (monthProductCatVendorData[month]) {
        productGraphValues.push(monthProductCatVendorData[month]);
      } else {
        productGraphValues.push(0);
      }
    }

    this.mainProductCatsData = [{
      data: catGraphValues,
      label: 'catagiries',
      borderWidth: 0
    },
    {
      data: productGraphValues,
      label: 'product',
      borderWidth: 0
    }];
  }




}
