// import { Component, OnDestroy } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// @Component({
//   templateUrl: 'dropdowns.component.html',
//   styleUrls: ['dropdowns.component.css']
// })
// export class DropdownsComponent implements OnDestroy {

//   status: { isOpen: boolean } = { isOpen: false };
//   disabled: boolean = false;
//   isDropup: boolean = true;
//   autoClose: boolean = false;

//   items: string[] = [
//     'The first choice!',
//     'And another choice for you.',
//     'but wait! A third!'
//   ];

//   constructor(private router: Router) { }
//   addbanner() {
//     this.router.navigate(['/buttons/addfeaturedbuttons']);
//   }
//   ngOnDestroy() {
//     this.status.isOpen = false;
//   }

//   onHidden(): void {
//     console.log('Dropdown is hidden');
//   }
//   onShown(): void {
//     console.log('Dropdown is shown');
//   }
//   isOpenChange(): void {
//     console.log('Dropdown state is changed');
//   }

//   toggleDropdown($event: MouseEvent): void {
//     $event.preventDefault();
//     $event.stopPropagation();
//     this.status.isOpen = !this.status.isOpen;
//   }

//   change(value: boolean): void {
//     this.status.isOpen = value;
//   }
//   getvendorG() {
//     this.type = "0";
//     this.getBanners();
//     this.bType = 'vendorG';

// }
// getvendorE() {
//     this.type = "1";
//     this.getBanners();
//     this.bType = 'vendorE';
// }
// getUserG() {
//     this.type = "2";
//     this.getBanners();
//     this.bType = 'userG';
// }
// getUserE() {
//     this.type = "3";
//     this.getBanners();
//     this.bType = 'userE';
// }
// getBanners() {
//     this.AppService.getBanners(this.type).subscribe(resp => {
//         this.bannerData = resp.json().result;
//         if (resp.json().status === 200) {
//             for (var i = 0; i < this.bannerData.length; i++) {
//                 if (this.bannerData[i].banner_position === 'Feature brands') {
//                     this.mainBannerData = this.bannerData[i].banner_details;
//                     this.bannerPos = this.bannerData[i].banner_position;
//                     this.noBanners = false;
//                     if (this.mainBannerData.length === 0) {
//                         this.noBanners = true;
//                     }

//                 }
//             }

//         }
//     })
// }
// deleteBanner(id) {
//     this.spinnerService.show();
//     var data = {
//         'id': id
//     }
//     this.AppService.deletebanners(data).subscribe(resp => {
//         this.spinnerService.hide();
//         swal('banner deleted successfully', '', 'success');
//         this.getBanners();
//     })
// }
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
// addBanner(id) {
//     let navigationExtras: NavigationExtras = {
//         queryParams: {
//             bannerId: id,
//             bType: this.bType
//         }
//     }
//     this.router.navigate(['/addbanner'], navigationExtras);
// }
// }
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

// import { Router, NavigationEnd } from '@angular/router';
@Component({
    templateUrl: 'dropdowns.component.html',
    styleUrls: ['dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) {
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
    ngOnInit() {
        this.getBanners();
        this.getvendorE();
    }
    key: string = 'name';
    reverse: boolean = true;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    // addbanner() {
    //   this.router.navigate(['/buttons/addfeaturedbuttons']);
    // }
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
    bannerData = [];
    mainBannerData = [];
    bannerPos;
    type;
    getBanners() {
        this.appService.getBanners(this.type).subscribe((res: any) => {
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
        this.router.navigate(['/buttons/addfeaturedbuttons'], navigationExtras);
    }

}

