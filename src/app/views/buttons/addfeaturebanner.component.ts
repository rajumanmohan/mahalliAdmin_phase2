// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-addfeaturebanner',
//   templateUrl: './addfeaturebanner.component.html'
// })
// export class AddfeaturebannerComponent implements OnInit {

//   constructor(private router: Router) { }

//   ngOnInit() {
//   }
 
// }
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
// import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

// import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-addfeaturebanner',
  templateUrl: './addfeaturebanner.component.html'
})

export class AddfeaturebannerComponent implements OnInit {
  bType;
  constructor(private router: Router, private appService: AppService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      // this.bannerId = params.bannerId,
      //     this.mainId = params.imgId
      this.bType = params.bType;
      if (this.bType === 'vendorG') {
        // this.BannersData = ["Main Banners"]
        this.banner_type = 0;
    } else if (this.bType === 'vendorE') {
        this.banner_type = 1;
        // this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]
    } else if (this.bType === 'userG') {
        this.banner_type = 2;
        // this.BannersData = ["Main Banners", "Brand Categories", "UserGrocery Dummy Banner"]
    } else {
        this.banner_type = 3;
        // this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]

    }
  })
}
backtofeature() {
  this.router.navigate(['/buttons/dropdowns']);

}
  type;
  category;
  subcategory;
  categorydata = [];
  subCategoryName = []
  backtobanner() {
    this.router.navigate(['/buttons']);
  }
  ngOnInit() {
    this.getCat();
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
          for(var i = 0;i<this.categorydata.length;i++)
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
    for(var i = 0;i<this.categorydata.length;i++){
    this.subCategoryName = this.categorydata[i].subcategory;
    console.log(this.subCategoryName);
  }
  }
  catName = [];
  catId = [];
  target;
  catNames;
  subCatId = []
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
  skusData=[];
  name;
  mobile_banner;
  mobile_bannerimage;
  website_banner;
  website_bannerimage;
  banner_type;
  title;
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
title:'Feature brands'
    });
    console.log(this.mobile_banner);
    console.log(this.website_banner);
    // this.spinnerService.show();
    var data = {
        
        'banners': this.skusData
        // "type": this.banType
    }
    this.appService.addbanners(data).subscribe((resp:any) => {
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
}

