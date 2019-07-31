import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-brandbanner',
  templateUrl: './brandbanner.component.html'
})
export class BrandbannerComponent implements OnInit {
  constructor(private router: Router,private appService: AppService) { }
  addbrandbanner() {
    this.router.navigate(['/buttons/addbrandbanner']);
  }
  ngOnInit() {
    this.getBanners();
  }
  bannerData = [];
    mainBannerData = [];
    bannerPos;
    type;
    getBanners() {
        this.appService.getBanners(3).subscribe((res: any) => {
            this.bannerData = res.result;
            for (var i = 0; i < this.bannerData.length; i++) {
                if (this.bannerData[i].banner_position === 'Feature brands') {
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
