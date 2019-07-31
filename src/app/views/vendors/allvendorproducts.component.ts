import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
// import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-allvendorproducts',
  templateUrl: './allvendorproducts.component.html',
  styleUrls: ['./allvendorproducts.component.scss']
})
export class AllvendorproductsComponent implements OnInit {

  constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) { }

  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  vendorProds = [];
  Status = [];
  ngOnInit() {
    this.Status = ["Approve", "Disapprove"];
    this.getVendorProducts();
  }
  getVendorProducts() {
    this.appService.getAllVendorApprovalProds().subscribe((res: any) => {
      // this.vendorProds = res.products;
      this.vendorProds = res.products.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
      // for (var i = 0; i < this.vendorProds.length; i++) {
      //     // this.skuArr = 
      // }
    })
  }
  statusChange(status, venId) {
    var inData = {
      "product_status": status
    }
    this.appService.acceptProduct(venId, inData).subscribe((res: any) => {
      if (res.status === "200") {
        // swal(res.message, "", "success");
        this.getVendorProducts();
      }
    })
  }
}
