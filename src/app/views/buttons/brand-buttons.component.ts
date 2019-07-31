// import { Component } from '@angular/core';

// import { Router, NavigationEnd } from '@angular/router';
// @Component({
//   templateUrl: 'brand-buttons.component.html'
// })
// export class BrandButtonsComponent {
//   constructor(private router: Router) { }
//   addbanner() {
//     this.router.navigate(['/buttons/addecommerce']);
//   }
// }
import { Component,OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';

// import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'buttons.component.html'
})
export class BrandButtonsComponent implements OnInit {

  constructor( private appService: AppService, public router: Router,private route: ActivatedRoute) { 
//     this.route.queryParams.subscribe(params => {
//       // this.bannerId = params.bannerId,
//       //     this.mainId = params.imgId
//       this.bType = params.bType;
//       // this.banner_type = params.bType;
//       // if (this.bannerId === '') {
//       //     // this.removeImg = false;
//       //     this.addbanners = true;
//       //     this.banTitle = "Add Banner";
//       // } else {
//       //     // this.Image = true;
//       //     // this.removeImg = true;
//       //     this.addbanners = false;
//       //     this.banTitle = "Edit Banner";
//       //     this.getBannersById();
//       //     this.webImg = params.webImg
//       //     this.mobImg = params.mobImg;
//       //     this.BannerType1 = params.banPos;
//       //     // this.banner_type = params.banner_type;
//       //     // this.addbanners = this.action;

//       // }
//       // if (this.bType === 'vendorG') {
//       //     this.BannersData = ["Main Banners"]
//       //     this.banner_type = 0;
//       // } else if (this.bType === 'vendorE') {
//       //     this.banner_type = 1;
//       //     this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]
//       // } else if (this.bType === 'userG') {
//       //     this.banner_type = 2;
//       //     this.BannersData = ["Main Banners", "Brand Categories", "UserGrocery Dummy Banner"]
//       // } else {
//       //     this.banner_type = 3;
//       //     this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]

//       // }
//   })
  }
  bType;
  ngOnInit(){
    // this.getBanners();
    this.getvendorE();
  }
  addbanner() {
    this.router.navigate(['/buttons/addmainbanner']);
  }
  getvendorG() {
    this.type = "0";
    this.bType = 'vendorG';
    this.getBanners();
}
getvendorE() {
    this.type = "1";
    this.getBanners();
    this.bType = 'vendorE';

}
getUserG() {
    this.type = "2";
    this.getBanners();
    this.bType = 'userG';

}
getUserE() {
    this.type = "3";
    this.getBanners();
    this.bType = 'userE';
}
  bannerData=[];
  mainBannerData=[];
  bannerPos;
  type;
  getBanners() {
    this.appService.getBanners(this.type).subscribe((res:any) => {
        this.bannerData = res.result;
        for (var i = 0; i < this.bannerData.length; i++) {
            if (this.bannerData[i].banner_position === 'Dummy Banner') {
                this.mainBannerData = this.bannerData[i].banner_details;
                this.bannerPos = this.bannerData[i].banner_position;
                // this.noBanners = false;
                if (this.mainBannerData.length === 0) {
                    // this.noBanners = true;
                }
            }
        }
    }, err => {

    })
}
deleteBanner(id) {
    // this.spinnerService.show();
    var data = {
        'id': id
    }
    this.appService.deletebanners(data).subscribe(resp => {
        // this.spinnerService.hide();
        // swal('banner deleted successfully', '', 'success');
        this.getBanners();
    })
}
// editBanner(id, ImgId, webImg, mobImg, banner_type) {
//     let navigationExtras: NavigationExtras = {
//         queryParams: {
//             bannerId: id,
//             imgId: ImgId,
//             webImg: webImg,
//             mobImg: mobImg,
//             banPos: this.bannerPos,
//             banType: banner_type,
//             bType: this.bType
//         }
//     }
//     this.router.navigate(['/addbanner'], navigationExtras);
// }
addBanner(id) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            // bannerId: id,
            bType: this.bType
        }
    }
    this.router.navigate(['/buttons/addmainbanner'], navigationExtras);
}

}
