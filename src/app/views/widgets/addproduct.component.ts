import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';
declare let swal: any;

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

    Id;
    constructor(private router: Router, private fb: FormBuilder, private appService: AppService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            // this.action = params.prodId;
            // this.pageValue = params.page;
            // this.wholeId = params.wholeId;
            this.wholeType = params.wholeType;
            this.Id = params.id;
            // console.log(this.Id);
            // debugger;
            if (this.wholeType == 'grocery') {
                this.getGroceryProds();
            } else {
                this.getEcomProds();
            }
            // for(var i=0;i<this.){

            // }
            // for (var i = 0; i < this.product.length; i++) {
            //     if(this.Id==this.product[i].id){
            //         console.log(this.product[i]);
            //         debugger
            //         this.product[i].skuImg = this.product[i].sku_images[0].sku_image;

            //     }
            //     // for (var j = 0; j < this.product[i].sku_row.length; j++) {
            //     // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {

            //     // }
            //   }
            // this.edit = params.edit;
            // if (this.edit == 'true') {
            //     this.showAddProductsFields = true;
            //     this.showAddProducts = false;
            // } else {
            //     this.showAddProductsFields = false;
            //     this.showAddProducts = true;
            // }

        });
    }
    addProductFrom: FormGroup;
    form: FormGroup;
    wholeType;
    category = [];
    cat_id;
    subArr = [];
    submitted = false;
    subCat_id;
    organic;
    sub_sub_id;
    country;
    urls = [];
    showProds = [];
    prodsName = [];
    category_id;
    subCatId;
    subSubdata;
    prodData
    ngOnInit() {
        this.addProductFrom = this.fb.group({
            category_id: ['', Validators.required],
            subcategory_id: ['', Validators.required],
            subsubcategory_id: [''],
            product_name: ['', Validators.required],
            brand: [''],
            country: [''],
            description: ['', Validators.required],
            images: ['', [Validators.required]]
        })
        this.getCat();
        this.getAdminbyId();

    }
    getAdminbyId() {
        this.appService.getAdminbyId(this.Id).subscribe((res: any) => {
            this.prodData = res.products[0];
            this.addProductFrom = this.fb.group({
                category_id: this.prodData.category_name,
                subcategory_id: this.prodData.sub_category_name,
                subsubcategory_id: [''],
                product_name: this.prodData.product_name,
                brand: this.prodData.brand,
                country: this.prodData.country,
                description: this.prodData.description,
                images: this.prodData.sku_images[0].sku_image
            })
            this.urls.push(this.prodData.sku_images[0].sku_image);
        })
    }
    backtoproduct() {
        this.router.navigate(['/widgets']);
    }
    getCat() {
        // this.wholeType = grocery;
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.wholeType = grocery;
        if (this.wholeType == "grocery") {
            this.appService.getGroceryCat(Data)
                .subscribe((resp: any) => {
                    if (resp.status === 200) {
                        this.category = resp.categories;
                        if (this.category) {
                            for (var i = 0; i < this.category.length; i++) {
                                if (this.cat_id == this.category[i].id) {
                                    this.subArr = this.category[i].subcategory;
                                    console.log(this.subArr);
                                    // debugger;
                                }
                            }
                        }
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        } else {
            let Data = {
                "country": "",
                "pin_code": "",
                "area": ""
            }
            this.appService.getEcomCat(Data)
                .subscribe((resp: any) => {
                    if (resp.status === 200) {
                        this.category = resp.categories;
                        if (this.category) {
                            for (var i = 0; i < this.category.length; i++) {
                                if (this.cat_id == this.category[i].id) {
                                    // this.subArr = this.category[i].subcategory;
                                    // console.log(this.subArr);
                                    // debugger;
                                }
                            }
                        }
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        }

    }
    get f() { return this.addProductFrom.controls; }
    addProductAdmin() {
        this.addProductFrom.value.category_id = this.cat_id;
        this.addProductFrom.value.subcategory_id = parseInt(this.subCat_id);
        this.addProductFrom.value.subsubcategory_id = parseInt(this.sub_sub_id);
        this.addProductFrom.value.country = this.country;
        this.addProductFrom.value.status = 1;
        this.addProductFrom.value.images = this.urls;
        this.addProductFrom.value.organic = JSON.stringify(this.organic);
        this.addProductFrom.value.type = this.wholeType == 'grocery' ? 'grocery' : 'ecommerce';


        this.submitted = true;
        if (this.addProductFrom.invalid) {
            return;
        }
        // else if(this.urls.length<4){
        // swal("Please select atleast 4 images","","warning");
        // }else {
        this.appService.insertAdminProd(this.addProductFrom.value).subscribe((res: any) => {
            if (res.status === 200) {
                swal(res.message, "", "success");
                this.router.navigate(['/widgets']);

            } else {
                swal(res.message, "", "error");

            }
        })
        // }
        // this.maxImg = false;
    }

    changeCat(name) {
        this.showProds = [];
        this.prodsName = [];
        for (var i = 0; i < this.category.length; i++) {
            if (name == this.category[i].category_name) {
                this.subArr = this.category[i].subcategory;
                this.cat_id = this.category[i].id;
                // this.addProductFrom.value.category_id.setValue(this.cat_id);
                this.category_id = this.category[i].id;
            }
        }
        // if (this.role === 'Admin') {
        //     this.appService.getsugProdForCat(this.cat_id).subscribe(res => {
        //         this.prodName = res.json().data;


        //         // for (var i = 0; i < this.prodName.length; i++) {
        //         //     this.showProds = (this.prodName[i].product_name);
        //         //     console.log(this.showProds);
        //         // }
        //     })
        // }

    }

    changeSub1(id) {
        // this.formdata.subcategoryName = id;
        for (var i = 0; i < this.category.length; i++) {
            for (var j = 0; j < this.category[i].subcategory.length; j++) {
                if (id == this.category[i].subcategory[j].sub_category_name) {
                    // this.subArr = this.category[i].subcategory;
                    // this.cat_id = this.category[i].id;
                    // // this.addProductFrom.value.category_id.setValue(this.cat_id);
                    // this.category_id = this.category[i].id;
                    this.subCat_id = this.category[i].subcategory[j].id;
                    this.subCatId = this.category[i].subcategory[j].id;
                    this.subSubdata = this.category[i].subcategory[j].subsub;
                    console.log(this.subSubdata);
                }
            }

        }
        // }



    }
    newSkuData = [];
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
        }
    }
    toggleVisibility(e) {
        this.organic = e.target.checked;
    }
    changeSubSub(id) {
        this.sub_sub_id = id;
    }
    getGroceryProds() {
        // this.showGroceryProds = true;
        // this.showEcomProds = false; 
        this.wholeType = "grocery";
        // if (this.role === "Admin") {
        // this.showWholeProds = false;
        // this.spinnerService.show();
        // this.pagination = [];
        this.appService.getGroceryProds()
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                // this.product = resp.products;

                // console.log()
                for (var i = 0; i < this.product.length; i++) {
                    this.product = resp.products.map(function (value, index) {
                        value.indexValue = index;
                        return value;
                    })
                    // for (var j = 0; j < this.product[i]..length; j++) {
                    // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                    this.product[i].skuImg = this.product[i].sku_images[0].sku_image;

                    // }
                    // }
                }

            })

        error => {
            console.log(error, "error");
        }
        // } else {


    }
    product = [];
    getEcomProds() {
        // this.showGroceryProds = false;
        // this.showEcomProds = true;
        this.wholeType = "ecommerce";
        // this.showWholeProds = false;
        // if (this.role === "Admin") {
        // this.spinnerService.show();
        // this.pagination = [];
        this.appService.getEcomProds()
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                // this.product = resp.products;/
                this.product = resp.products.map(function (value, index) {
                    value.indexValue = index;
                    return value;
                })
                // console.log()
                for (var i = 0; i < this.product.length; i++) {
                    // for (var j = 0; j < this.product[i].sku_row.length; j++) {
                    // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                    this.product[i].skuImg = this.product[i].sku_images[0].sku_image;

                    // }
                }
                // }

            })

        error => {
            console.log(error, "error");
        }
        // } 

    }
    update() {
        this.addProductFrom.value.category_id = this.cat_id;
        this.addProductFrom.value.subcategory_id = parseInt(this.subCat_id);
        this.addProductFrom.value.subsubcategory_id = parseInt(this.sub_sub_id);
        this.addProductFrom.value.country = this.country;
        this.addProductFrom.value.status = 1;
        this.addProductFrom.value.images = this.urls;
        this.addProductFrom.value.organic = JSON.stringify(this.organic);
        this.addProductFrom.value.type = this.wholeType == 'grocery' ? 'grocery' : 'ecommerce';
        this.appService.updateAdminProd(this.Id, this.addProductFrom.value).subscribe((res: any) => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
                this.router.navigate(['/widgets']);

            } else {
                swal(res.json().message, "", "error");

            }
        })

    }
    deleteImg: any;
    DeleteImg(index) {
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                // this.deleteImg = i;
                // var data = {
                //     'id': skuimgId
                // }
                // this.appService.delproduct(skuimgId).subscribe(resp => {

                //     // this.router.navigate(['/prducts']);
                // })
                this.urls.splice(index, 1);
            } else {
                return;
            }
        });

    }
}
