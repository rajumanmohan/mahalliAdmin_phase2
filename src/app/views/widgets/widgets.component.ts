import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { NavigationEnd, NavigationExtras } from '@angular/router';
import { ExcelService } from '../../services/excel.service';
declare let jsPDF;


@Component({
  templateUrl: 'widgets.component.html'
})
export class WidgetsComponent implements OnInit {
  constructor(public router: Router, private appService: AppService, private excelService: ExcelService) { }
  showGroceryProds;
  key: string = 'name';
  reverse: boolean = true;
  categories = [];
  subCategories = [];
  selectedFile: any;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  wholeType;
  ngOnInit() {
    //this.getGroceryProds();
    this.getGroceryCategories();
  }

  getGroceryCategories() {
    this.getGroceryProds();
    this.categories = [];
  this.subCategories = [];
  this.product = [];
    let Data = {
        "country": "",
        "pin_code": "",
        "area": ""
    }
    // this.spinnerService.show();
    this.appService.getGroceryCat(Data)
        .subscribe((resp: any) => {
            if (resp.status === 200) {
                // this.name = ""
                this.categories = resp.categories;
                // this.spinnerService.hide();
            }
            else {

            }
        },
            error => {

                console.log(error, "error");
            })
}

getEcomCategories(){
  this.getEcomProds();
  this.categories = [];
  this.subCategories = [];
  this.product = [];
  this.appService.getEcomCat({})
  .subscribe((resp: any) => {
      if (resp.status === 200) {
          this.categories = resp.categories;
      }
      else {

      }
  },
      error => {

          console.log(error, "error");
      })
  
}


onCategoryChange(categoryId){
  this.subCategories = [];
  this.product = [];
  this.getProductsByCategoryId(categoryId);
  this.getSubCategoriesByCategoryId(categoryId);
}

getSubCategoriesByCategoryId(categoryId){
  this.appService.getSubCategoriesByCategoryId(categoryId).subscribe((resp: any) => {
    this.subCategories = resp.sub_category;
  })
}

onSubCategoryChange(subCategoryId){
  this.product =[];
 this.getProductsBySubCategoryId(subCategoryId);
}

getProductsByCategoryId(categoryId) {
  this.appService.prodCat(categoryId).subscribe((resp: any) => {
    this.product = resp.products;
  })
}

getProductsBySubCategoryId(subCategoryId){
  this.appService.prodSub(subCategoryId).subscribe((resp: any) => {
    this.product = resp.products;
  })
}

exportAsXLSX(): void {
  var tempProductList = JSON.parse(JSON.stringify( this.product));
  tempProductList.filter(x=> {delete x.category_id; delete x.subcategory_id; delete x.subsubcategory_id; delete x.sku_images; 
    delete x.indexValue;});

  if(tempProductList.length > 0)
    this.excelService.exportAsExcelFile(tempProductList, 'Mahalli');
}

exportAsPdf() {
  var tempProductList = JSON.parse(JSON.stringify( this.product));
  
  tempProductList.filter(x=> {delete x.category_id; delete x.subcategory_id; delete x.subsubcategory_id; delete x.sku_images; 
    delete x.indexValue;});

    if(tempProductList.length == 0){
      return false;
    }

  let fields = Object.keys(tempProductList[0]);
  console.log('fields', fields);
  let tableCol = [];
  for (let f of fields) {
    tableCol.push({ title: f, dataKey: f });
  }

  var doc = new jsPDF('l', 'pt', [1200, 500]);
 
  doc.setFontSize(12);
  doc.text('Reports', 40, 20);
  doc.setFontSize(10);
  doc.autoTable(tableCol, tempProductList, {
    columnStyles: {
      'id': {columnWidth: 30},
      'description': {columnWidth: 200},
      'skuImg': {columnWidth: 150},
      'organic': {columnWidth: 50},
      'status': {columnWidth: 50},
      'country': {columnWidth: 60}
      // etc
    },
    printHeaders: true, startY: 40, headerStyles: { fillColor: [100] }
  });
  doc.save('product_report_' + new Date());
}

onFileSelect(event){
  this.selectedFile = null;
  if(!!event.target && !!event.target.files[0]){
    if(event.target.files[0].name.split('.')[1] != 'xlsx'){
      alert('aceepts only xlsx formatted files');
      return false;
    }
    this.selectedFile = event.target.files[0];
  }
}

onImportClick(){
  if(!this.selectedFile){
    alert('Please choose file to continue');
    return false;
  }

  this.appService.adminproductbulkupload(this.selectedFile)
  .subscribe((resp: any) => {
      if (resp.status === 200) {
        this.selectedFile = null;
        alert('bulk upload is successful');
      }
      else {

      }
  },
      error => {
          console.log(error, "error");
      })
}


  limit = 10;
  skip = 1;
  addproduct() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // 'name': name,
        // 'id': id,
        // 'pic': pic,
        // 'des': des,
        // 'type': this.type,
        'wholeType': this.wholeType
      }
    }
    this.router.navigate(['/widgets/addproduct'], navigationExtras);
  }
  editProd(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // 'name': name,
        'id': id,
        // 'pic': pic,
        // 'des': des,
        // 'type': this.type,
        'wholeType': this.wholeType
      }
    }
    this.router.navigate(['/widgets/addproduct'], navigationExtras);
  }
  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // lineChart4
  public lineChart4Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChart4Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart4Colours: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 2
    }
  ];
  public lineChart4Legend = false;
  public lineChart4Type = 'line';


  // barChart2
  public barChart2Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart2Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,.2)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = false;
  public barChart2Type = 'bar';


  // barChart3
  public barChart3Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart3Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart3Primary: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Danger: Array<any> = [
    {
      backgroundColor: getStyle('--danger'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Success: Array<any> = [
    {
      backgroundColor: getStyle('--success'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Legend = false;
  public barChart3Type = 'bar';


  // lineChart5
  public lineChart5Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart5Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart5Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart5Info: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--info'),
      borderWidth: 2
    }
  ];
  public lineChart5Success: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--info'),
      borderWidth: 2
    }
  ];
  public lineChart5Warning: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--warning'),
      borderWidth: 2
    }
  ];
  public lineChart5Legend = false;
  public lineChart5Type = 'line';
  showEcomProds = false;
  role;
  product;
  getGroceryProds() {
    this.showGroceryProds = true;
    this.showEcomProds = false;
    this.wholeType = "grocery";
    // if (this.role === "Admin") {
    // this.showWholeProds = false;
    // this.spinnerService.show();
    // this.pagination = [];
    this.appService.getGroceryProds()
      .subscribe((resp: any) => {
        // this.spinnerService.hide();
        // this.product = resp.products;
        this.product = resp.products.map(function (value, index) {
          value.indexValue = index;
          return value;
        })
        console.log(this.product)
        for (var i = 0; i < this.product.length; i++) {
          // for (var j = 0; j < this.product[i]..length; j++) {
          // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
          this.product[i].skuImg = this.product[i].sku_images[0].sku_image;

          // }
          // }
        }

      })

    error => {
      console.log(error, "error");
    }
    // } else {


  }
  getEcomProds() {
    this.showGroceryProds = false;
    this.showEcomProds = true;
    this.wholeType = "ecommerce";
    // this.showWholeProds = false;
    // if (this.role === "Admin") {
    // this.spinnerService.show();
    // this.pagination = [];
    this.appService.getEcomProds()
      .subscribe((resp: any) => {
        // this.spinnerService.hide();
        // this.product = resp.products;/
        this.product = resp.products.map(function (value, index) {
          value.indexValue = index;
          return value;
        })

        for (var i = 0; i < this.product.length; i++) {
          // for (var j = 0; j < this.product[i].sku_row.length; j++) {
          // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
          this.product[i].skuImg = this.product[i].sku_images[0].sku_image;

          // }
        }
        // }

      })

    error => {
      console.log(error, "error");
    }
    // } 

  }
  deleteProductAdmin(id) {
    // swal("Do you want to delete?", "", "warning", {
    //     buttons: ["Cancel!", "Okay!"],
    // }).then((value) => {
    //     if (value === true) {
    //         // var data = {
    //         //     'id': id
    //         // }
    this.appService.deleteAdminProdUrl(id)
      .subscribe((resp: any) => {
        if (resp.status === 200) {
          // swal('product delete successfully', '', 'success');
          this.wholeType == "ecommerce" ? this.getEcomProds() : this.getGroceryProds();
          // this.getGroceryProds();
        }
        else {
          // swal(resp.json().message, '', 'error');
        }
      },
        error => {
          console.log(error, "error");
        })
    // } else {
    //     return;
    // }
    // });


  }

  pageChanged(e) {
    this.limit += 10;
    this.skip += 1;
  }
}
