import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';


@Component({
    selector: 'app-wholesellerproducts',
    templateUrl: './wholesellerproducts.component.html',
    styleUrls: ['./wholesellerproducts.component.scss']
})
export class WholesellerproductsComponent implements OnInit {


    constructor(public router: Router, private appService: AppService) { }
    showGroceryProds;
    showEcomProds;
    sellerProId;
    product = []
    addproduct() {
        this.router.navigate(['/wholesellerproducts/addwholesellerproducts']);
    }
    key: string = 'name';
    reverse: boolean = true;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }


    ngOnInit() {
        this.getGroceryProds();
    }

    // showProdDetails() {
    //     this.router.navigate(['/wholesellerproducts/productsapproval']);
    // }
    getGroceryProds() {
        // this.spinnerService.show();
        this.showGroceryProds = true;
        this.showEcomProds = false;
        let goodResponse = [];
        // this.pagination = [];
        this.product = [];
        this.appService.getWholesellerProdsByGro(this.sellerProId)
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                if (resp.status === 200) {
                    // this.product = resp.products;
                    this.product = resp.products.map(function (value, index) {

                        value.indexValue = index;
                        return value;
                    })
                } else if (resp.status === 400) {
                    // this.noRecords = true;
                }

                // this.paginationValues = resp.json().data.pagination;
                // this.totalCount = resp.json().data.pagination.totalCount;
                // this.pages = Math.ceil(this.totalCount / 10);
                // console.log(this.pages);
                // for (var i = 0; i < this.pages; i++) {
                //     this.pagination.push(i);
                // }
            })

        error => {
            console.log(error, "error");
        }
    }
    getEcomProds() {
        // this.spinnerService.show();
        this.showGroceryProds = false;
        this.showEcomProds = true;
        let goodResponse = [];
        // this.pagination = [];
        this.product = [];
        this.appService.getWholesellerProdsByEcom(this.sellerProId)
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                if (resp.status === 200) {
                    // this.product = resp.products;
                    this.product = resp.products.map(function (value, index) {

                        value.indexValue = index;
                        return value;
                    })
                } else if (resp.status === 400) {
                    // this.noRecords1 = true;
                }

                // this.paginationValues = resp.json().data.pagination;
                // this.totalCount = resp.json().data.pagination.totalCount;
                // this.pages = Math.ceil(this.totalCount / 10);
                // console.log(this.pages);
                // for (var i = 0; i < this.pages; i++) {
                //     this.pagination.push(i);
                // }
            })

        error => {
            console.log(error, "error");
        }
    }
    deleteProductWhole(id) {
        // swal("Do you want to delete?", "", "warning", {
        //     buttons: ["Cancel!", "Okay!"],
        // }).then((value) => {
        // if (value === true) {
        // var data = {
        //     'id': id
        // }
        this.appService.deleteProduct(id)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    // swal('product delete successfully', '', 'success');
                    // this.wholeType == "ecommerce" ? this.getEcomProds() : this.getGroceryProds()
                    this.getGroceryProds();
                }
                else {
                    // swal(resp.json().message, '', 'error');
                }
            },
                error => {
                    console.log(error, "error");
                })
        // } else {
        //     return;
        // }
        // });


    }
    edit(id){
        let navigationExtras: NavigationExtras = {
            queryParams: {
              'sellerId': id
            }
          }
        this.router.navigate(['/wholesellerproducts/addwholesellerproducts'],navigationExtras);
    }
}
