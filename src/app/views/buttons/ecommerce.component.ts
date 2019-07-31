import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  constructor(public router: Router, private appService: AppService) { }
  bType;
  ngOnInit() {
    this.getBanners();
    this.getvendorE();
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

  addsinglebanner() {

    this.router.navigate(['/buttons/addecommerce']);
  }
  bannerData = [];
  mainBannerData = [];
  bannerPos;
  type;
  getBanners() {
    this.appService.getBanners(this.type).subscribe((res: any) => {
      this.bannerData = res.result;
      for (var i = 0; i < this.bannerData.length; i++) {
        if (this.bannerData[i].banner_position === 'UserGrocery Dummy Banner') {
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
}
