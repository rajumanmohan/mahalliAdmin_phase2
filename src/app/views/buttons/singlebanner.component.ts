import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-singlebanner',
  templateUrl: './singlebanner.component.html',
  styleUrls: ['./singlebanner.component.scss']
})
export class SinglebannerComponent implements OnInit {
  bannerData = [];
  mainBannerData = [];
  constructor(private router: Router, private appService: AppService) { }
  addsinglebanner() {
    this.router.navigate(['/buttons/addsinglebanner']);
  }
  ngOnInit() {
    this.getBanners();
  }
  getBanners() {
    this.appService.getBanners(3).subscribe((res: any) => {
        this.bannerData = res.result;
        for (var i = 0; i < this.bannerData.length; i++) {
            if (this.bannerData[i].banner_position === 'UserGrocery Dummy Banner') {
                this.mainBannerData = this.bannerData[i].banner_details;
                // this.bannerPos = this.bannerData[i].banner_position;
                // this.noBanners = false;
                // if (this.mainBannerData.length === 0) {
                    // this.noBanners = true;
                }
            }
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



}
