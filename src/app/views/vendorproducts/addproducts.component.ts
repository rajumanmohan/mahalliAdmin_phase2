import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router } from '@angular/router';
declare var $: any;
declare var jsPDF: any;
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.scss']
})
// export class AddproductsComponent implements OnInit {



export class AddproductsComponent implements OnInit {
    reqProduct;
    constructor(private appService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }
    showSkuDetails: boolean;
    CatDetails = true;
    subSubdata = [];
    showAddProductsForm1 = false;
    tableData = false;
    key: string = 'name';
    reverse: boolean = true;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    ngOnInit() {
        this.getCat();
        this.getAttributes();
    }
    addsku() {
        this.showSkuDetails = true;
    }
    deletesku() {
        this.showSkuDetails = false;
    }
    backtovendorproducts() {
        this.CatDetails = true;
        this.tableData = false;
    }
    category = [];
    wholeType;
    cat_id;
    subArr = [];
    showGro = true;
    showecom;
    formdata = {
        categoryName: '',
        subcategoryName: '',
        proName: '',
        brand: '',
        country: '',
        subsubcategoryName: ''
    }
    getGroceryProds() {
        this.subArr = [];
        this.showGro = true;
        this.showecom = false;
        this.getCat();
    }
    getEcomProds() {
        this.showGro = false;
        this.showecom = true;
        this.subArr = [];
        this.getEcomCat();
    }
    getCat() {
        // this.wholeType = grocery;
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.wholeType = grocery;
        // if (this.wholeType == "grocery") {
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
    }
    getEcomCat() {
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.spinnerService.show();
        this.appService.getEcomCat(Data)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    // this.name = ""
                    this.category = resp.categories;
                    // this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    cat_name;
    showSubcats(catId) {
        for (var i = 0; i < this.category.length; i++) {
            if (catId == this.category[i].id) {
                this.cat_name = this.category[i].category_name;
                this.subArr = this.category[i].subcategory;
                console.log(this.subArr);
                this.formdata.categoryName = this.category[i].category_name;
                // debugger;
            }
        }

    }
    //  else {
    //     let Data = {
    //         "country": "",
    //         "pin_code": "",
    //         "area": ""
    //     }
    //     this.appService.getEcomCat(Data)
    //         .subscribe(resp => {
    //             if (resp.json().status === 200) {
    //                 this.category = resp.json().categories;
    //                 if (this.category) {
    //                     for (var i = 0; i < this.category.length; i++) {
    //                         if (this.cat_id == this.category[i].id) {
    //                             // this.subArr = this.category[i].subcategory;
    //                             // console.log(this.subArr);
    //                             // debugger;
    //                         }
    //                     }
    //                 }
    //             }
    //             else {

    //             }
    //         },
    //             error => {
    //                 console.log(error, "error");
    //             })
    // }

    // }
    // getsubsubProd(id) {
    //   // this.showAddProductsFields = false;
    //   // this.showAddProducts5 = true;
    //   // this.showAddProducts = false;
    //   this.appService.prodSubsub(id).subscribe((res:any) => {
    //       if (res.status == 200) {
    //           // this.reqProds = res.json().products;
    //           // this.noProd = false;
    //           // this.showProdName = false;
    //           // this.description = this.prodName[0].description;


    //       }

    //       if (res.json().status == 400) {
    //           // this.noProd = true;
    //           // this.showProdName = true;

    //       }
    //   })
    // }
    changeSub1(id) {
        this.formdata.subcategoryName = id;
        for (var i = 0; i < this.category.length; i++) {
            for (var j = 0; j < this.category[i].subcategory.length; j++) {
                if (id == this.category[i].subcategory[j].sub_category_name) {
                    // this.subArr = this.category[i].subcategory;
                    this.cat_id = this.category[i].id;
                    // // this.addProductFrom.value.category_id.setValue(this.cat_id);
                    // this.category_id = this.category[i].id;
                    this.subCat_id = this.category[i].subcategory[j].id;
                    //     this.subCatId = this.category[i].subcategory[j].id;
                    this.subSubdata = this.category[i].subcategory[j].subsub;
                    //     console.log(this.subSubdata);
                    // }
                }

            }
            // }



        }
    }
    reqProds = [];
    subcat_name;
    getsubProd(id, subname) {
        // this.showAddProducts = false;
        // this.showAddProducts5 = true;
        // this.showAddProductsFields = false;
        this.tableData = true;
        this.CatDetails = false;
        this.subcat_name = subname;
        this.appService.prodSub(id).subscribe((res: any) => {
            if (res.status == 200) {
                this.reqProds = res.products;
                // this.noProd = false;
                // this.showProdName = false;
                // this.description = this.prodName[0].description;


            }

            if (res.status == 400) {
                // this.noProd = true;
                // this.showProdName = true;

            }
        })
    }
    description;
    getsubsubProd(id, subsub) {
        this.tableData = true;
        this.CatDetails = false;
        this.appService.prodSubsub(id).subscribe((res: any) => {
            if (res.status == 200) {
                this.reqProds = res.products;
                // this.noProd = false;
                // this.showProdName = false;
                this.sub_sub_id = id;
                // this.description = this.prodName[0].description;
                this.formdata.subsubcategoryName = subsub;

            }

            if (res.status == 400) {
                // this.noProd = true;
                // this.showProdName = true;

            }
        })
    }
    showAddProductsForm(prdname, brd, prId) {
        this.showAddProductsForm1 = true;
        this.CatDetails = false;
        this.tableData = false;
        this.formdata.proName = prdname;
        this.formdata.brand = brd;
        this.AdminProdId = prId;
        // this.showAddProducts = false;
        // this.showAddProducts5 =false;
        // this.formdata.subsubcategoryName = subSub;
    }
    skusData = [];
    urls = [];
    images = [];
    sku() {
        this.urls = [];
        // this.skuImg = '';
        // this.vegImage = '';
        // this.selectedImage = undefined;
        // this.quality_image = ''
        // this.images1 = [];
        this.images = [];
        // this.image1 = [];
        this.skusData.push({
            size: '',
            quantity: '',
            // mrp: '',
            // offer: '',
            selling_price: '',
            stock: '',
            // skuImage: this.skuImg,
            // quality_image: '',
            // image: this.type,
            // country: '',
            // state: '',
            // city: '',
            // area: '',
            // express_delivery: false,
            // normal_delivery: this.selectedNormalValue,
            // Description: '',
            // specification: '',
            // termscnd: '',
            // image1: '',
            // size_measuring_unit: '',
            // terms: {
            //     "id": '',
            //     "data": '',
            //     "last_updated": '',
            //     "is_footer": '',
            //     "product_id": '',
            //     "sku_id": ''
            // },
            // faq: {
            //     "id": '',
            //     "question": '',
            //     "answer": '',
            //     "product_id": '',
            //     "sku_id": ''
            // },
            // question: '',
            // answer: '',
            sku_images: [
                // {
                //     sku_image: '',
                //     id: '',
                //     sku_id: ''
                // }
            ]

        });
    }
    deleteSku(index, skid, productid) {
        this.skusData.splice(index, 1);
        // if (this.action === '') {
        //     this.skusData.splice(index, 1);
        // }
        // else {
        //     this.spinnerService.show();
        //     swal("Do you want to delete?", "", "warning", {
        //         buttons: ["Cancel!", "Okay!"],
        //     }).then((value) => {

        //         if (value === true) {
        //             var data = {
        //                 'product_id': productid,
        //                 'skid': skid
        //             }
        //             // this.appService.deleteSkuProduct(data).subscribe(resp => {
        //             //     if (resp.json().status === 200) {
        //             //         this.spinnerService.hide();
        //             //         swal('Delete sku successfully', '', 'success');
        //             //         this.router.navigate(['/prducts']);
        //             //         this.getProduct();
        //             //     }
        //             // }),
        //             error => {
        //                 console.log(error, "error");
        //             }
        //         } else {
        //             return;
        //         }
        //     });
    }

    // this.sku_Id = skid;
    // this.productId = productid;

    // }
    country;
    sub_sub_id;
    subCat_id;
    AdminProdId;
    organic;
    textarea;
    insertProduct() {

        for (var i = 0; i < this.skusData.length; i++) {
            this.skusData[i].quantity = this.skusData[i].quantity.toString();
            this.skusData[i].stock = this.skusData[i].stock.toString();
            // this.skusData[i].color = this.skusData[i].color;

            // this.skusData[i].selling_price = this.skusData[i].selling_price.toString();
            // this.skusData[i].actual_price = this.skusData[i].actual_price.toString();
            // this.skusData[i].discount = this.skusData[i].discount.toString();
            // this.skusData[i].country = this.selcountry;
            // this.skusData[i].state = this.selstate;
            // this.skusData[i].city = this.selcity;
            // this.skusData[i].area = this.selarea;
            // this.skusData[i].terms = this.skusData[i].termscnd;
            // this.skusData[i].faq = this.skusData[i].question;
            // this.skusData[i].answer = this.skusData[i].answer;
        }
        var data = {
            // 'id': this.productId,
            'product_name': this.formdata.proName,
            'category_id': this.cat_id,
            // 'brand_name': this.formdata.Manufacture,
            'brand': this.formdata.brand,
            "subsubcategory_id": this.sub_sub_id,
            'subcategory_id': JSON.parse(this.subCat_id),
            // "wholesaler_id": JSON.parse(this.wholeId) || 0,
            "country": this.country,
            "adminproduct_id": this.AdminProdId || 0,
            "organic": this.organic,
            "vendor_id": sessionStorage.vemdorId,
            "description": this.textarea,

            // 'warehouse': this.dataWare,
            // 'country': this.country,
            // 'state': this.state,
            // 'city': this.city,
            // 'area': this.area,
            // 'image': this.images,
            // 'actual_price': this.actualPrice,
            // 'selling_price': this.sellingPrice,
            // // 'quality_image': this.strImage,
            // 'discount_type': this.discountOption,
            // 'discount_percentage': this.disAmount,
            // 'express_delivery': this.selectedExpressValue,
            // 'normal_delivery': this.selectedNormalValue,
            // 'description': this.Description,
            // 'specification': this.specification,
            // 'terms': this.terms,

            'sku': this.skusData,
            // 'question': this.faq,
            // 'answer': this.answer,

        }
        //         console.log(data);
        //         debugger;
        // // return;
        // this.spinnerService.show();
        this.spinnerService.show();
        this.appService.insertVendorProduct(data).subscribe((resp: any) => {
            if (resp.status === 200) {
                this.spinnerService.hide();
                // swal('product added successfully', '', 'success');
                this.router.navigate(['/vendorproducts']);
                this.showAddProductsForm1 = false;
                // this.showAddProducts = true;
            }
        },
            error => {
                console.log(error, "error");
            })
        // })
        // this.appService.insertProduct(data)
        //     .subscribe((resp: any) => {
        //         if (resp.status === 200) {
        //             this.spinnerService.hide();
        //             // swal('product added successfully', '', 'success');
        //             this.router.navigate(['/vendorproducts']);
        //             this.showAddProductsForm1 = false;
        //             // this.showAddProducts = true;
        //         }
        //     },
        //         error => {
        //             console.log(error, "error");
        //         })
    }
    strImage;
    skuImage;
    action;
    selectedImage;
    img;
    urls1 = [];
    myImages;
    newSkuData = [];
    skuImge;
    imgSku;
    // onSelectFile1(event, index, skid) {
    //   this.images = [];
    //   if (event.target.files && event.target.files[0]) {
    //       var filesAmount = event.target.files.length;
    //       for (let i = 0; i < filesAmount; i++) {
    //           const fileReader: FileReader = new FileReader();
    //           fileReader.onload = (event) => {
    //               this.skuImage = '';
    //               if (this.action !== '') {
    //                   if (this.selectedImage === undefined) {
    //                       this.img = fileReader.result;
    //                       this.strImage = this.img.split(',')[1];
    //                       // this.productDetails[0].myImages.push({ 'id': '', 'product_image': fileReader.result });
    //                       // this.images.push({ 'image_no': '', 'image_data': this.strImage })

    //                       for (var i = 0; i < this.skusData.length; i++) {
    //                           if (i === index) {

    //                               this.skusData[i].sku_images.push({
    //                                   sku_image: this.img,
    //                                   product_id: parseInt(this.action),
    //                                   new_image: this.strImage,
    //                                   sku_img_path: '',
    //                                   id: '',
    //                                   sku_id: this.skusData[i].skid

    //                               })


    //                               this.skusData[i].images = this.skusData[i].sku_images;
    //                               console.log(this.skusData[i].sku_images);
    //                               this.newSkuData.push(this.skusData[i]);
    //                               for (var j = 0; j < this.newSkuData.length; j++) {
    //                                   if (skid === this.newSkuData[j].skid) {
    //                                       this.newSkuData.splice(j, 1);
    //                                       return;
    //                                   }
    //                               }
    //                               return;
    //                           }
    //                       }
    //                   } else {
    //                       this.img = fileReader.result;
    //                       this.strImage = this.img.split(',')[1];


    //                       for (var i = 0; i < this.skusData.length; i++) {
    //                           if (i === index) {
    //                               this.newSkuData.push(this.skusData[i]);
    //                           }
    //                       }

    //                       for (var j = 0; j < this.newSkuData[0].sku_images.length; j++) {
    //                           if (this.selectedImage === this.newSkuData[0].sku_images[j].id) {
    //                               this.newSkuData[0].sku_images.splice(j, 1);
    //                           }
    //                       }

    //                       this.newSkuData[0].sku_images.push({
    //                           "sku_img_path": this.skuImge,
    //                           'sku_image': this.img,
    //                           'id': this.selectedImage,
    //                           'sku_id': this.imgSku,
    //                           "product_id": this.newSkuData[0].product_id,
    //                           "new_image": this.strImage
    //                       })



    //                       // for (var i = 0; i < this.skusData.length; i++) {
    //                       //     // this.skusData[i].sku_images.push()
    //                       //     for (var j = 0; j < this.skusData[i].sku_images.length; j++) {
    //                       //         if (this.selectedImage === this.skusData[i].sku_images[j].id) {
    //                       //             this.skusData[i].sku_images.splice(j, 1);
    //                       //             // this.skusData[i].sku_images[j].sku_image = fileReader.result;
    //                       //             //                                         this.skusData[i].sku_images.push({
    //                       //             //                                             "id": this.selectedImage,
    //                       //             //                                             "sku_id": this.skusData[i].sku_images[j].sku_id,
    //                       //             //                                             "sku_image": this.img,
    //                       //             //                                             "product_id": this.skusData[i].sku_images[j].product_id,
    //                       //             //                                         })
    //                       //             // j
    //                       //             //                                         if (this.skusData[i].sku_images[j].id === this.selectedImage) {
    //                       //             //                                             this.skusData[i].sku_images.splice(j, 1);
    //                       //             //                                         }



    //                       //             this.skusData[i].images.push({
    //                       //                 "id": this.selectedImage,
    //                       //                 "sku_id": this.skusData[i].sku_images[j].sku_id,
    //                       //                 "sku_image": this.strImage,
    //                       //                 "product_id": this.skusData[i].sku_images[j].product_id,
    //                       //                 "sku_img_path": this.skusData[i].sku_images[j].sku_image,
    //                       //             })

    //                       //             for (var k = 0; k < this.skusData[i].images.length; k++) {
    //                       //                 if (this.skusData[i].images[k].id === this.selectedImage) {
    //                       //                     this.skusData[i].images.splice(k, 1);
    //                       //                 }
    //                       //             }
    //                       //         }
    //                       //     }

    //                       //     this.skusData[i].sku_images.push({
    //                       //         "sku_image": this.img,
    //                       //         "id": this.selectedImage
    //                       //     })
    //                       // }

    //                       // for (var i = 0; i < this.productDetails[0].myImages.length; i++) {
    //                       //     if (this.productDetails[0].myImages[i].id === this.selectedImage) {
    //                       //         this.productDetails[0].myImages.splice(i, 1)
    //                       //     }
    //                       // }
    //                       // this.productDetails[0].myImages.push({ 'id': this.selectedImage, 'product_image': fileReader.result });
    //                       // this.images.push({ 'image_no': this.selectedImage, 'image_data': this.strImage })
    //                       // this.imagenum = this.urls.push(fileReader.result);
    //                   }
    //               } else {

    //                   for (var i = 0; i < this.skusData.length; i++) {
    //                       if (i === index) {
    //                           this.img = fileReader.result;
    //                           this.strImage = this.img.split(',')[1];
    //                           // this.urls.push({ sku_image: fileReader.result });
    //                           this.urls.push(fileReader.result);
    //                           this.urls1.push({ skuImg: fileReader.result });
    //                           this.images.push(this.strImage);
    //                           // this.skusData[i].image = myReader.result;
    //                           // this.skusData[i].skuImage = this.images;
    //                           this.skusData[i].sku_images = this.urls;
    //                           // this.myImages = this.urls1;
    //                           return;
    //                       }
    //                   }
    //                   this.myImages = this.urls1;
    //               }
    //           }
    //           fileReader.readAsDataURL(event.target.files[i]);
    //       }
    //   }
    // }
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.urls.push(e.target.result);
                    // this.skusData
                    for (var i = 0; i < this.skusData.length; i++) {
                        this.skusData[i].sku_images = this.urls;
                    }
                }
                reader.readAsDataURL(file);
            }
        }
    }
    reqAdmin() {
        var inData = {
            // category_id,subcategory_id,subsubcat_id,category_name,sub_category_name,subsubcat_name
            "category_id": this.cat_id,
            "subcategory_id": this.subCat_id,
            "product_name": this.reqProduct,
            "subsubcat_id": this.sub_sub_id || '',
            "category_name": this.cat_name,
            "sub_category_name": this.formdata.subcategoryName,
            "subsubcat_name  ": this.formdata.subsubcategoryName,
        }
        this.appService.reqAdmin(inData).subscribe((res: any) => {
            if (res.status == 200) {
                //   swal(res.json().message, "", "success");
                $('#product-name').modal('hide');
            } else {
                //   swal(res.json().message, "", "error");
            }
        })
    }
    Attributes = [];
    getAttributes() {
        this.appService.getAttributes().subscribe((res: any) => {
            if (res.status == 200) {
                // swal(res.message, "", "success");
                this.Attributes = res.attributes;

            } else {
                // swal(res.message, "", "error");
            }
        })
    }
}
