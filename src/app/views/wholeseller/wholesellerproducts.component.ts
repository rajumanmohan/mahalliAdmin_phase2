import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-wholesellerproducts',
    templateUrl: './wholesellerproducts.component.html',
    styleUrls: ['./wholesellerproducts.component.scss']
})
export class WholesellerproductsComponent implements OnInit {
    salerId;
    showGroceryProds;
    roletype;
    showEcomProds;
    constructor(private appService: AppService, private route: ActivatedRoute, public router: Router) {
        this.route.queryParams.subscribe(params => {
            this.salerId = params.salerproductId
        });
        this.roletype = sessionStorage.getItem('role');
    }
    key: string = 'name';
    reverse: boolean = true;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    product;
    sellerProId;
    ngOnInit() {
        this.getGroceryProds();
    }
    //   getGroceryProds() {
    //     // this.spinnerService.show();

    //     // let goodResponse = [];
    //     // this.pagination = [];
    //     // this.product = [];
    //     this.appService.getWholesellerProdsByGro(this.sellerProId)
    //         .subscribe((resp:any) => {
    //             // this.spinnerService.hide();
    //             if (resp.status === 200) {
    //                 this.product = resp.products;
    //             } else if (resp.status === 400) {
    //                 // this.noRecords = true;
    //             }

    //             // this.paginationValues = resp.json().data.pagination;
    //             // this.totalCount = resp.json().data.pagination.totalCount;
    //             // this.pages = Math.ceil(this.totalCount / 10);
    //             // console.log(this.pages);
    //             // for (var i = 0; i < this.pages; i++) {
    //             //     this.pagination.push(i);
    //             // }
    //         })

    //     error => {
    //         console.log(error, "error");
    //     }
    // }
    showimageapproval() {
        this.router.navigate(['wholeseller/imageapproval']);
    }

    getEcomProds() {
        // this.spinnerService.show();
        this.showGroceryProds = false;
        this.showEcomProds = true;
        // let goodResponse = [];
        // this.pagination = [];
        // this.product = [];
        this.appService.getWholesellerProdsByEcom(this.salerId)
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                if (resp.status === 200) {
                    this.product = resp.products;
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
    getGroceryProds() {
        // this.spinnerService.show();
        this.showGroceryProds = true;
        this.showEcomProds = false;
        // let goodResponse = [];
        // this.pagination = [];
        this.product = [];
        this.appService.getWholesellerProdsByGro(this.salerId)
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                if (resp.status === 200) {
                    this.product = resp.products;
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
    showStatus;
    Status;

    status(btn, prodId, Appr) {
        this.Status = btn.value;
        this.key = btn.value === "Active" ? "Inactive" : "Active"
        var inData = {
            "approval": this.key
        }
        this.showStatus = !this.showStatus;
        if (this.showStatus) {
            btn.value = Appr === "Active" ? "Inactive" : "Active"
        } else {
            btn.value = Appr
        }
        this.appService.updateWholesellerProds(inData, prodId).subscribe((res: any) => {
            if (res.status === 200) {
                // swal(res.message, "", "success");
                // this.getProduct();
            } else {
                // swal(res.json().result, "", "error");
            }
        })
    }
    toggleVisibility(e, prodId) {
        var inData = {
            "Dealsoftheday": e.target.checked
        }
        this.appService.updateWholesellerProds(inData, prodId).subscribe((res: any) => {
            if (res.status === 200) {
                // swal(res.message, "", "success");
                // this.getProduct();
            } else {
                // swal(res.result, "", "error");
            }
        })
    }
    toggleVisibility1(e, prodId) {
        var inData = {
            "Topoffers": e.target.checked
        }
        this.appService.updateWholesellerProds(inData, prodId).subscribe((res: any) => {
            if (res.status === 200) {
                // swal(res.message, "", "success");
                // this.getProduct();
            } else {
                // swal(res.result, "", "error");
            }
        })
    }
    deleteProduct(id) {
        // swal("Do you want to delete?", "", "warning", {
        //     buttons: ["Cancel!", "Okay!"],
        // }).then((value) => {

        //     if (value === true) {
        //         // var data = {
        //     'id': id
        // }
        this.appService.deleteProduct(id)
            .subscribe((resp: any) => {
                if (resp.message === 'Success') {
                    // swal('product delete successfully', '', 'success')
                    // this.getProduct();
                    this.showGroceryProds == true ? this.getGroceryProds() : this.getEcomProds();
                }
                else {

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
    showProdDetails(prodId) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                prodId: prodId,
            }
        }
        this.router.navigate(['wholeseller/imageapproval'], navigationExtras);
    }
    // showProdDetails(prodId) {
    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             prodId: prodId,
    //         }
    //     }
    //     this.router.navigate(['/wholeseller/imageapproval'], navigationExtras);
    // }
}
