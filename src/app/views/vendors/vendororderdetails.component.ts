import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendororderdetails',
  templateUrl: './vendororderdetails.component.html',
  styleUrls: ['./vendororderdetails.component.scss']
})
export class VendororderdetailsComponent implements OnInit {
  orderId;
  ordData = [];
  orderDet;
  orderAdd;
  count;
  constructor(public router: Router, private route: ActivatedRoute, private appService: AppService) {
    this.route.queryParams.subscribe(params => {
      this.orderId = params.orderId
      // this.type = params.type;
      // this.wholeId = params.wholeId
    })
  }
  ngOnInit() {
    this.ordDetails();
  }
  backtovendorproducts() {
    this.router.navigate(['/vendorslist/vendororders']);
  }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ordDetails() {
    this.appService.orderById(this.orderId).subscribe((resp: any) => {
      this.ordData = resp.Order.products;
      for (var i = 0; i < this.ordData.length; i++) {
        // this.productsData = this.ordData.products;

        this.ordData[i].quantity = this.ordData[i].quantity;
        this.ordData[i].selling_price = this.ordData[i].sku_row[0].selling_price;

      }
      this.orderDet = resp.Order.details[0];
      this.orderAdd = resp.Order.delivery_address[0];
      this.count = resp.Order.total_selling_price;
    })
  }
}
