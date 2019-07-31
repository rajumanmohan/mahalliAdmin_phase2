import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-couponmanagement',
  templateUrl: './couponmanagement.component.html',
  styleUrls: ['./couponmanagement.component.scss']
})
export class CouponmanagementComponent implements OnInit {
  coupon;
  total;
  disAmt;
  disPer;
  upto;
  model;
  offerId;
  offers;
  model1;
  userId;
  data = { discountType: '' };
  amount;
  percentage;
  myDatePickerOptions;
  constructor(private appService: AppService, private route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.offerId = params.offerId
    })
  }

  ngOnInit() {
    this.getOfferbyId();
  }

  backtocoupon() {
    this.router.navigate(['/coupons']);
  }
  onDateChanged(date1) {
    this.model = date1.formatted;
  }
  onDateChanged2(date2) {
    this.model1 = date2.formatted;
  }
  addOffer() {
    var data = {
      'voucher_code': this.coupon,
      'total_count': this.total,
      'discount_type': this.data.discountType,
      'discount_amount': this.disAmt || 0,
      'discount_percentage': this.disPer,
      'minimum_value': this.upto,
      'start_date': this.model,
      'end_date': this.model1

    }
    console.log(data);
    this.appService.addVoucher(data).subscribe((resp: any) => {
      // console.log(resp.;
      if (resp.status === 200) {
        // swal(resp.message, "", "success");
        this.router.navigate(['/coupons']);
        // this.router.navigate(['/offers']);
      }
      else if (resp.status === 400) {
        // swal(resp.message, "", "error");
      }

    })
  }
  DisType = [
    { id: '1', name: 'Percentage' },
    { id: '2', name: 'Flat' }
  ]

  discount(event) {
    this.data.discountType = event;
    if (this.data.discountType === '1') {
      this.amount = false;
      this.percentage = true;
      this.disAmt = '';
    } else {
      this.percentage = false;
      this.amount = true;
      this.disPer = '';
    }
  }
  discountValue;
  disType;
  mySelect;
  getOfferbyId() {
    // this.spinnerService.show();
    this.appService.getVoucherById(this.offerId).subscribe((resp: any) => {
      // this.spinnerService.hide();
      this.offers = resp.data;
      this.coupon = this.offers[0].voucher_code;
      this.disAmt = this.offers[0].discount_amount;
      this.disType = this.offers[0].discount_type;

      this.disPer = this.offers[0].discount_percentage;
      this.total = this.offers[0].total_count;
      this.upto = this.offers[0].minimum_value;
      this.model = this.myDatePickerOptions = this.offers[0].start_date.formatted;
      this.discountValue = this.offers[0].discount_type;
      this.model1 = this.offers[0].end_date.formatted;

      if (this.disType === 0) {
        this.data.discountType = this.DisType[0].name;
        this.amount = true;
      } else {
        this.data.discountType = this.DisType[1].name;
        this.percentage = true;
      }
    })
    console.log(this.data.discountType);
  }
  updateOfferById() {
    // this.spinnerService.show();

    var data = {
      'voucher_code': this.coupon,
      'total_count': this.total,
      'discount_type': this.data.discountType,
      'discount_amount': this.disAmt,
      'discount_percentage': this.disPer,
      'minimum_value': this.upto,
      'start_date': this.model,
      'end_date': this.model1
    }

    this.appService.updateVoucher(this.offerId, data).subscribe((resp: any) => {
      // this.spinnerService.hide();
      if (resp.status === 200) {
        // swal(resp.json().message, "", "success");
        this.router.navigate(['/coupons']);
      }
      else {
        // swal(resp.json().message, "", "error");
      }
    })
  }


}
