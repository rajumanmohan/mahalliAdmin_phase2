import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allwholesellerproducts',
  templateUrl: './allwholesellerproducts.component.html',
  styleUrls: ['./allwholesellerproducts.component.scss']
})
export class AllwholesellerproductsComponent implements OnInit {

  constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) { }

  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  wholeSellerProds = [];
  Status = [];
  categories = [];
  subCategory = [];

  ngOnInit() {
    this.Status = ["Active", "Inactive"];
    this.getCategories();
    this.getWholesellerProducts();
  }

  getCategories() {
    this.categories = [];
       
      this.appService.getCategoriesData().subscribe((resp: any) => {
              if (resp.status === 200) {
                  this.categories = resp.result;
              }
              else {

              }
          },
              error => {

                  console.log(error, "error");
              })
  }

  onCategoryChange(categoryId){
    this.wholeSellerProds=[];
    this.appService.getwholesellerapproverByCategoryId(categoryId).subscribe((resp: any) => {
      this.wholeSellerProds = resp.products;
    });
  }
 
 

  getWholesellerProducts() {
    this.appService.getAllwholesalerApprovalProds().subscribe((res: any) => {
      // this.vendorProds = res.products;
      this.wholeSellerProds = res.products.map(function (value, index) {
        value.indexValue = index;
        return value; 
      })
    })
  }
  statusChange(status, product_id) {
    var inData = {
      "approval": status
    }
    this.appService.updateWholesellerProds(inData,product_id ).subscribe((res: any) => {
      if (res.status == 200) {
         Swal.fire(res.message, "", "success");
        this.getWholesellerProducts(); 
      }
    })
  }

}
