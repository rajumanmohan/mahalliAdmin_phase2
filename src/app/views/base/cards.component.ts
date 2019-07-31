import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
// import swal from 'sweetalert';
// import swal from 'sweetalert2';
declare let swal: any;

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    templateUrl: 'cards.component.html'
})
export class CardsComponent implements OnInit {

    constructor(public router: Router, private appService: AppService, private spinnerService: Ng4LoadingSpinnerService) { }
    key: string = 'name';
    reverse: boolean = true;
    groceryCats;
    title;
    EcomCats;
    type;
    category;
    typeVal;
    ngOnInit() {
        this.getGroceryCats();
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    addbanner() {

        this.router.navigate(['/Category/addbanners']);
    }
    // addbanner() {
    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             // 'name': name,
    //             // 'id': id,
    //             // 'pic': pic,
    //             // 'des': des,
    //             // 'type': this.type,
    //             'typeVal': this.typeVal
    //         }
    //     }
    //     this.router.navigate(['/Category/addbanners'], navigationExtras);
    // }
    getGroceryCats() {
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        this.groceryCats = true;
        this.title = "Grocery Categories";
        this.EcomCats = false;
        this.type = "grocery";
        this.typeVal = 0;
        // this.spinnerService.show();
        this.appService.getGroceryCat(Data)
            .subscribe((resp: any) => {

                if (resp.status == 200) {
                    // this.name = ""
                    this.category = resp.categories.map(function (value, index) {
                        value.indexValue = index;
                        return value;
                    })
                    // this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    getEcomCats() {
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        this.groceryCats = false;
        this.title = "Ecommerce Categories"
        this.EcomCats = true;
        this.type = "ecommers";
        this.typeVal = 1;
        // this.spinnerService.show();
        this.appService.getEcomCat(Data)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    // this.name = ""
                    this.category = resp.categories.map(function (value, index) {

                        value.indexValue = index;
                        return value;
                    })
                    // this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    deleteCat(id) {
        // swal('hi',"","success");
        // return;
        // this.spinnerService.show();
        // swal("Do you want to delete?", "", "warning", {
        //     buttons: ["Cancel!", "Okay!"],
        // }).then((value) => {

        //     if (value === true) {
        var data = {
            'id': id
        }
        this.appService.deleteCat(data)
            .subscribe(resp => {
                // this.spinnerService.hide();
                swal("Category Deleted successfully", '', 'success');
                this.getGroceryCats();
            }),
            error => {
                console.log(error, "error");
            }
    }
    // else {
    //     return;
    // }
    // });
    // }

    addCat(name, id, pic, des) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name,
                'id': id,
                'pic': pic,
                'des': des,
                'type': this.type,
                'typeVal': this.typeVal
            }
        }
        this.router.navigate(['/Category/addbanners'], navigationExtras);
    }
}
