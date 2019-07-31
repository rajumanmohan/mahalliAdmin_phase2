// import { Component, OnInit } from '@angular/core';
// import { AppService } from './../../services/mahali/mahali-data.service';
// // import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
// import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-addsinglebanner',
//   templateUrl: './addsinglebanner.component.html',
//   styleUrls: ['./addsinglebanner.component.scss']
// })
// export class AddsinglebannerComponent implements OnInit {

//   constructor(private router: Router, private appService: AppService, private route: ActivatedRoute) { }

//   backtosinglebanner() {
//     this.router.navigate(['/buttons/singlebanner']);
//   }
//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
// import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

// import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-addmainbanner',
  templateUrl: './addmainbanner.component.html'
})

export class AddsinglebannerComponent implements OnInit {
  mainId;
  bannerId;
  categorydata;
  category = false;
  subcategory = false;
  product = false;
  skus = false;
  brand = false;
  positions = [];
  type: any;
  selectedImage: any;
  selectedImage1: any;
  addbanners: boolean;
  title: any;
  mobile_banner;
  website_banner;
  website_bannerimage;
  skusData = [];
  productData = [];
  subCategoryName = [];
  catName = [];
  catId = [];
  subCatId = [];
  prodId = [];
  banType;
  banTitle;
  name;
  catImg;
  target;
  banner_position;
  catNames;
  mobile_bannerimage;
  webImg;
  mobImg;
  BannerType;
  BannerType1;
  bType;
  BannersData = [];
  dropdownSettings = {}
  dropdownList = [];
  selectedItems;
  showMobile = true;
  showWeb = true;
  website;
  mobile;;
  constructor(private router: Router, private appService: AppService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.bannerId = params.bannerId,
        this.mainId = params.imgId
      this.bType = params.bType;
      // this.banner_type = params.bType;
      if (this.bannerId === '') {
        // this.removeImg = false;
        this.addbanners = true;
        this.banTitle = "Add Banner";
      } else {
        // this.Image = true;
        // this.removeImg = true;
        this.addbanners = false;
        this.banTitle = "Edit Banner";
        this.getBannersById();
        this.webImg = params.webImg
        this.mobImg = params.mobImg;
        this.BannerType1 = params.banPos;
        // this.banner_type = params.banner_type;
        // this.addbanners = this.action;

      }
      if (this.bType === 'vendorG') {
        this.BannersData = ["Main Banners"]
        this.banner_type = 0;
      } else if (this.bType === 'vendorE') {
        this.banner_type = 1;
        this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]
      } else if (this.bType === 'userG') {
        this.banner_type = 2;
        this.BannersData = ["Main Banners", "Brand Categories", "UserGrocery Dummy Banner"]
      } else {
        this.banner_type = 3;
        this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]

      }
    })
  }

  backtobanner() {
    this.router.navigate(['/buttons']);
  }
  ngOnInit() {
    this.getCat();
    this.getProduct();
    this.getSubCategory();
    // this.getBannerPostion();
    this.dropdownSettings = {
      singleSelection: true,
      // text: "Select Countries",
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      // enableSearchFilter: true,
      classes: "myclass custom-class"
    };
    this.dropdownList = [{ 'itemName': 'Website' }, { 'itemName': 'Mobile' }]
  }
  onChange(type, index) {
    this.type = type;
    // for (var i = 0; i < this.skusData.length; i++) {
    // if (i === index) {
    if (this.type === 'Categories') {
      this.category = true;
      this.subcategory = false;
      // this.product = false;
      // this.brand = false;
      // this.skus = false;
    } else if (this.type === 'Subcategories') {
      this.subcategory = true;
      this.category = false;
      this.getSubCategory();
      // this.product = false;
      // this.brand = false;
      // this.skus = false;
    } else if (this.type === 'Product') {
      this.subcategory = false;
      this.category = false;
      // this.product = true;
      // this.skus = false;
      // this.brand = false;
    } else if (this.type === 'sku') {
      this.subcategory = false;
      this.category = false;
      // this.product = false;
      // this.brand = false;
      // this.skus = true;
    } else if (this.type === 'Brand') {
      this.subcategory = false;
      this.category = false;
      // this.product = false;
      // this.skus = false;
      // this.brand = true;
    }
    return;
    // }
    // }


  }
  getCat() {
    this.appService.getCat()
      .subscribe((resp: any) => {
        if (resp.status === 200) {
          this.categorydata = resp.categories;
          for (var i = 0; i < this.categorydata.length; i++)
            this.subCategoryName = this.categorydata[i].subcategory;
          console.log(this.subCategoryName);
        }
        else {

        }
      },
        error => {
          console.log(error, "error");
        })
  }
  getSubCategory() {
    for (var i = 0; i < this.categorydata.length; i++) {
      this.subCategoryName = this.categorydata[i].subcategory;
      console.log(this.subCategoryName);
    }
  }
  getProduct() {
    this.appService.getProduct()
      .subscribe((resp: any) => {
        this.productData = resp.data.results;
      })
    error => {
      console.log(error, "error");
    }
  }
  changeCat(id, index, action) {
    if (action === 'cat') {
      for (var i = 0; i < this.categorydata.length; i++) {
        if (this.categorydata[i].id === parseInt(id)) {
          this.catName.push(this.categorydata[i].category_name);
          this.catId.push(this.categorydata[i].id);

          // for (var i = 0; i < this.skusData.length; i++) {
          // this.image = myReader.result;
          // if (i === index) {
          this.target = this.catId.join(',');
          this.catNames = this.catName.join(',');
          //     }
          // }
          return;
        }
      }
    } else if (action === 'subcat') {
      for (var i = 0; i < this.subCategoryName.length; i++) {
        if (this.subCategoryName[i].id === parseInt(id)) {
          this.catName.push(this.subCategoryName[i].sub_category_name);
          this.subCatId.push(this.subCategoryName[i].id);

          // for (var i = 0; i < this.skusData.length; i++) {
          //     // this.skusData[i].image = myReader.result;
          //     if (i === index) {
          this.target = this.subCatId.join(',');
          this.catNames = this.catName.join(',');
          //     }
          // }
          return;
        }
      }
    }
    // else if (action === 'prod') {
    //     for (var i = 0; i < this.productData.length; i++) {
    //         if (this.productData[i].product_id === parseInt(id)) {
    //             this.catName.push(this.productData[i].product_name);
    //             this.prodId.push(this.productData[i].product_id);

    //             for (var i = 0; i < this.skusData.length; i++) {
    //                 // this.skusData[i].image = myReader.result;
    //                 if (i === index) {
    //                     this.skusData[i].target = this.prodId.join(',');
    //                     this.skusData[i].catNames = this.catName.join(',');
    //                 }
    //             }
    //             return;
    //         }
    //     }
    // }

  }

  banner_type;

  addbanner() {
    this.skusData.push({
      name: this.name,
      type: this.type,
      // skuImage: this.skuImg,
      mobile_banner: this.mobile_banner,
      mobile_bannerimage: this.mobile_bannerimage,
      website_banner: this.website_banner,
      website_bannerimage: this.website_bannerimage,
      target: this.target,
      catNames: this.catNames,
      banner_type: this.banner_type,
      title: 'UserGrocery Dummy Banner'
    });
    console.log(this.mobile_banner);
    console.log(this.website_banner);
    // this.spinnerService.show();
    var data = {
      // 'title': this.title,
      'banners': this.skusData
      // "type": this.banType
    }
    this.appService.addbanners(data).subscribe((resp: any) => {
      if (resp.status === 200) {
        // this.spinnerService.hide();
        // swal('banner added successfully', '', 'success');
        this.router.navigate(['/buttons']);
      }
      else if (resp.json().status === 400) {
        // swal(resp.json().message, '', 'error');
      }
    })
  }
  image1;
  strImage1;
  changeListener1($event, index): void {
    this.readThis1($event.target, index);
  }

  readThis1(inputValue: any, index): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image1 = myReader.result;
      this.strImage1 = this.image1.split(',')[1];
      // for (var i = 0; i < this.skusData.length; i++) {
      //     if (i === index) {
      // this.skusData[i].image = myReader.result;
      this.website_banner = this.strImage1;
      this.website_bannerimage = this.image1;
      //     }
      // }
    }
    myReader.readAsDataURL(file);
  }
  image;
  strImage;
  changeListener($event, index): void {
    this.readThis($event.target, index);
  }

  readThis(inputValue: any, index): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.strImage = this.image.split(',')[1];
      // for (var i = 0; i < this.skusData.length; i++) {
      // if (i === index) {
      // this.skusData[i].image = myReader.result;
      this.mobile_banner = this.strImage;
      this.mobile_bannerimage = this.image;
      //     }
      // }
    }
    myReader.readAsDataURL(file);
  }
  bannerDetails;
  skuValues;
  imageId;
  // name;
  // mobile_banner = [];
  // website_banner = [];
  bannerData = [];
  mainData = [];
  mainBannerData = [];
  getBannersById() {
    this.appService.getbannerById(this.bannerId, this.mainId).subscribe((res: any) => {
      this.bannerData = res.result;
      console.log(this.bannerData);
      this.name = this.bannerData[0].name;
      this.catImg = this.bannerData[0].mobile_banner;
      this.catImg = this.bannerData[0].banner_position;
      this.BannerType = this.bannerData[0].banner_position;
    }, err => {

    })
  }
  updateBanner() {
    // this.spinnerService.show();
    var data = {
      'id': this.mainId,
      'name': this.name,
      'website_banner': this.website_banner,
      'mobile_banner': this.mobile_banner,
      'banner_type': this.banner_type,
      'target': this.target,
      'title': this.title
      // 'catNames': this.catNames
    }
    this.appService.updateBanner(data).subscribe((resp: any) => {
      if (resp.status === 200) {
        // swal("Updated successfully", '', 'success');
        this.router.navigate(['/buttons']);
      }
      else {
        // swal(resp.message, '', 'error');

      }

    })
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    if (this.selectedItems[0].itemName == 'Website') {
      this.showWeb = true;
      this.showMobile = false;

    } else {
      this.showWeb = false;
      this.showMobile = true;
    }
    // else if(this.selectedItems == 'Mobile'&& 'Website')  {
    //     this.showWeb = true;
    //     this.showMobile = true;
    // }
    // else {
    //     this.showWeb = false;
    //     this.showMobile = false;
    // }
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  toggleVisibility(e) {
    this.website = e.target.checked;
    // if (e.target.name == 'website') {
    if (this.website == true) {
      this.showWeb = true;
      this.showMobile = false;
    } else if (this.website == false && this.mobile == true) {
      this.showWeb = false;
      this.showMobile = true;
    }

    // }

    // this.showWeb = false;
    // this.showMobile = true;
  }
  toggleVisibility1(e) {
    this.mobile = e.target.checked;
    if (this.mobile == true) {
      this.showWeb = false;
      this.showMobile = true;
    } else if (this.mobile == false && this.website == true) {
      this.showWeb = true;
      this.showMobile = false;
    }
    // this.showWeb = true;
    // this.showMobile = false;
  }


}
