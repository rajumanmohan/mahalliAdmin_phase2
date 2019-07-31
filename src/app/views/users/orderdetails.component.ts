import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  type;
  constructor(public router: Router, private route: ActivatedRoute, private appService: AppService) {
    this.route.queryParams.subscribe(params => {
      this.orderId = params.orderId
      this.type = params.type;
      // this.wholeId = params.wholeId
    })
  }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  orderId;
  ordData = [];
  orderDet;
  orderAdd;
  count;
  ngOnInit() {
    this.getUserOrdDetails();
  }
  backtouserproducts() {
    this.router.navigate(['/userslist/userorders']);
  }
  getUserOrdDetails() {
    this.appService.orderDetByVenId(this.orderId).subscribe((resp: any) => {
      this.ordData = resp.Order.products;
      for (var i = 0; i < this.ordData.length; i++) {
        this.ordData[i].selling_price = this.ordData[i].updated_price;
      }
      this.orderDet = resp.Order.details[0];
      this.orderAdd = resp.Order.delivery_address[0];
      this.count = resp.Order.total_selling_price;

    })
  }
}
