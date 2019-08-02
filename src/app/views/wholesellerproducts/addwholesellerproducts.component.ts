import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
declare var jsPDF: any;
import Swal from 'sweetalert2';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-addwholesellerproducts',
    templateUrl: './addwholesellerproducts.component.html',
    styleUrls: ['./addwholesellerproducts.component.scss']
})
export class AddwholesellerproductsComponent implements OnInit {
    sellerId;
    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService) {
        this.route.queryParams.subscribe(params => {
            this.sellerId = params.sellerId
        });
        if (this.sellerId) {
            this.showAddProductsForm1 = true;
            this.showSkuDetails = false;
            this.CatDetails = false;
            this.getProduct();
        }
    }
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
    image1;
    skuimages = [];
    product = [];
    wholesalerid;
    product_name;
    organic;
    textarea;
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
    getProduct() {
        this.image1 = true;
        this.skuimages = [];
        let goodResponse = [];
        this.skusData = [];
        // this.spinnerService.show();
        this.appService.getProdById(this.sellerId)
            .subscribe((resp: any) => {
                // this.spinnerService.hide();
                this.product = resp.products;
                if (this.product != undefined) {
                    for (var i = 0; i < this.product.length; i++) {
                        // if (parseInt(this.action) === this.product[i].product_id) {
                        this.formdata.categoryName = this.product[0].category_name;
                        // console.log(this.formdata.categoryName)
                        this.formdata.subcategoryName = this.product[i].sub_category_name;
                        this.formdata.proName = this.product[i].product_name;
                        this.formdata.brand = this.product[i].brand;
                        this.cat_id = this.product[i].category_id;
                        this.subCat_id = this.product[i].subcategory_id;
                        this.wholesalerid = this.product[i].wholesaller_id;
                        this.product_name = this.product[i].product_name;
                        // this.country=  this.product[i].country;
                        this.organic = this.product[i].organic;
                        this.textarea = this.product[i].description;
                        // this.prodtype = this.product[i].type;
                        // this.is_active = this.product[i].is_active;
                        // this.brand_id = this.product[i].brand_id;
                        this.skusData = this.product[i].sku;
                        // this.upProduct = this.product[i].sku_row;
                        this.formdata.country = this.product[i].country;

                        // for (var m = 0; m < this.product[i].warehouse.length; m++) {
                        //     this.optionsModel.push(this.product[i].warehouse[m].warehouse_id);
                        // }
                        for (var j = 0; j < this.skusData.length; j++) {
                            this.skusData[j].offer = this.skusData[j].offer_price;
                            this.skusData[j].sellingPrice = this.skusData[j].selling_price;
                            this.skusData[j].discount = this.skusData[j].discount;
                            this.skusData[j].quantity = this.skusData[j].quantity;
                            this.skusData[j].color = this.skusData[j].color;
                            this.skusData[j].units = this.skusData[j].units;
                            this.skusData[j].image1 = this.skusData[j].quality_image;
                            this.skusData[j].termscnd = this.skusData[j].terms_conditions;
                            this.skusData[j].answer = this.skusData[j].answer;
                            this.skusData[j].question = this.skusData[j].question;
                            this.skusData[j].size_measuring_unit = this.skusData[j].size_measuring_unit;

                            // this.skusData[j].state = this.skusData[j].State;
                            // this.skusData[j].city = this.skusData[j].City;
                            // this.skusData[j].area = this.skusData[j].Area;
                            // this.skusData[j].country = this.skusData[j].Country;
                            // this.type = this.skusData[j].image;
                            // this.skusData[j].sku_images = this.skusData[j].sku_images;

                            // this.locationData = JSON.parse(sessionStorage.getItem('locationData'));
                            // this.getStates(this.skusData[j].Country);
                            // this.getCitys(this.skusData[j].State);
                            // this.getArea(this.skusData[j].City);
                        }
                        return;
                        // }
                    }
                }

            })
        error => {
            console.log(error, "error");
        }

    }
    addsku() {
        this.showSkuDetails = true;
    }
    deletesku() {
        this.showSkuDetails = false;
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
    showSubcats(catId) {
        for (var i = 0; i < this.category.length; i++) {
            if (catId == this.category[i].id) {
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
    getsubProd(id) {
        // this.showAddProducts = false;
        // this.showAddProducts5 = true;
        // this.showAddProductsFields = false;
        this.tableData = true;
        this.CatDetails = false;
        this.appService.prodSubAdmin(id).subscribe((res: any) => {
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
        this.appService.prodSubsubAdmin(id).subscribe((res: any) => {
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
    // organic;
    // textarea;
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
            // "vendor_id": sessionStorage.userId,
            "description": this.textarea,
            "wholesaller_id": sessionStorage.wholesalerId,

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
        this.spinnerService.show();
        this.appService.insertProduct(data)
            .subscribe((resp: any) => {
                if (resp.status == 200) {
                    this.spinnerService.hide();
                    Swal.fire(resp.message, '', "success");
                    // swal('product added successfully', '', 'success');
                    this.router.navigate(['/wholesellerproducts']);
                    this.showAddProductsForm1 = false;
                    // this.showAddProducts = true;
                } else {
                    Swal.fire(resp.message, '', "error");

                }
            },
                error => {
                    console.log(error, "error");
                })
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
    onSelectFile1(event, index, skid) {
        this.images = [];
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                const fileReader: FileReader = new FileReader();
                fileReader.onload = (event) => {
                    this.skuImage = '';
                    if (this.action !== '') {
                        if (this.selectedImage === undefined) {
                            this.img = fileReader.result;
                            this.strImage = this.img.split(',')[1];
                            // this.productDetails[0].myImages.push({ 'id': '', 'product_image': fileReader.result });
                            // this.images.push({ 'image_no': '', 'image_data': this.strImage })

                            for (var i = 0; i < this.skusData.length; i++) {
                                if (i === index) {

                                    // this.skusData[i].sku_images.push({
                                    //     sku_image: this.img,
                                    //     product_id: parseInt(this.action),
                                    //     new_image: this.strImage,
                                    //     sku_img_path: '',
                                    //     id: '',
                                    //     sku_id: this.skusData[i].skid

                                    // })
                                    this.skusData[i].sku_images.push({})


                                    this.skusData[i].images = this.skusData[i].sku_images;
                                    console.log(this.skusData[i].sku_images);
                                    this.newSkuData.push(this.skusData[i]);
                                    for (var j = 0; j < this.newSkuData.length; j++) {
                                        if (skid === this.newSkuData[j].skid) {
                                            this.newSkuData.splice(j, 1);
                                            return;
                                        }
                                    }
                                    return;
                                }
                            }
                        } else {
                            this.img = fileReader.result;
                            this.strImage = this.img.split(',')[1];


                            for (var i = 0; i < this.skusData.length; i++) {
                                if (i === index) {
                                    this.newSkuData.push(this.skusData[i]);
                                }
                            }

                            for (var j = 0; j < this.newSkuData[0].sku_images.length; j++) {
                                if (this.selectedImage === this.newSkuData[0].sku_images[j].id) {
                                    this.newSkuData[0].sku_images.splice(j, 1);
                                }
                            }

                            // this.newSkuData[0].sku_images.push({
                            //     "sku_img_path": this.skuImge,
                            //     'sku_image': this.img,
                            //     'id': this.selectedImage,
                            //     'sku_id': this.imgSku,
                            //     "product_id": this.newSkuData[0].product_id,
                            //     "new_image": this.strImage
                            // })
                            this.newSkuData[0].sku_images.push({

                            })



                            // for (var i = 0; i < this.skusData.length; i++) {
                            //     // this.skusData[i].sku_images.push()
                            //     for (var j = 0; j < this.skusData[i].sku_images.length; j++) {
                            //         if (this.selectedImage === this.skusData[i].sku_images[j].id) {
                            //             this.skusData[i].sku_images.splice(j, 1);
                            //             // this.skusData[i].sku_images[j].sku_image = fileReader.result;
                            //             //                                         this.skusData[i].sku_images.push({
                            //             //                                             "id": this.selectedImage,
                            //             //                                             "sku_id": this.skusData[i].sku_images[j].sku_id,
                            //             //                                             "sku_image": this.img,
                            //             //                                             "product_id": this.skusData[i].sku_images[j].product_id,
                            //             //                                         })
                            //             // j
                            //             //                                         if (this.skusData[i].sku_images[j].id === this.selectedImage) {
                            //             //                                             this.skusData[i].sku_images.splice(j, 1);
                            //             //                                         }



                            //             this.skusData[i].images.push({
                            //                 "id": this.selectedImage,
                            //                 "sku_id": this.skusData[i].sku_images[j].sku_id,
                            //                 "sku_image": this.strImage,
                            //                 "product_id": this.skusData[i].sku_images[j].product_id,
                            //                 "sku_img_path": this.skusData[i].sku_images[j].sku_image,
                            //             })

                            //             for (var k = 0; k < this.skusData[i].images.length; k++) {
                            //                 if (this.skusData[i].images[k].id === this.selectedImage) {
                            //                     this.skusData[i].images.splice(k, 1);
                            //                 }
                            //             }
                            //         }
                            //     }

                            //     this.skusData[i].sku_images.push({
                            //         "sku_image": this.img,
                            //         "id": this.selectedImage
                            //     })
                            // }

                            // for (var i = 0; i < this.productDetails[0].myImages.length; i++) {
                            //     if (this.productDetails[0].myImages[i].id === this.selectedImage) {
                            //         this.productDetails[0].myImages.splice(i, 1)
                            //     }
                            // }
                            // this.productDetails[0].myImages.push({ 'id': this.selectedImage, 'product_image': fileReader.result });
                            // this.images.push({ 'image_no': this.selectedImage, 'image_data': this.strImage })
                            // this.imagenum = this.urls.push(fileReader.result);
                        }
                    } else {

                        for (var i = 0; i < this.skusData.length; i++) {
                            if (i === index) {
                                this.img = fileReader.result;
                                this.strImage = this.img.split(',')[1];
                                // this.urls.push({ sku_image: fileReader.result });
                                this.urls.push(fileReader.result);
                                this.urls1.push({ skuImg: fileReader.result });
                                this.images.push(this.strImage);
                                // this.skusData[i].image = myReader.result;
                                // this.skusData[i].skuImage = this.images;
                                this.skusData[i].sku_images = this.urls;
                                // this.myImages = this.urls1;
                                return;
                            }
                        }
                        this.myImages = this.urls1;
                    }
                }
                fileReader.readAsDataURL(event.target.files[i]);
            }
        }
    }
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
    reqProduct;
    reqAdmin() {
        var inData = {
            "category_id": this.cat_id,
            "subcategory_id": this.subCat_id,
            "product_name": this.reqProduct,
            "subsubcat_id": this.sub_sub_id || '',
            "category_name": this.formdata.categoryName,
            "sub_category_name": this.formdata.subcategoryName,
            "subsubcat_name  ": this.formdata.subsubcategoryName,
        }
        this.appService.reqAdmin(inData).subscribe((res: any) => {
            if (res.status == 200) {
                // swal(res.message, "", "success");
                $('#product-name').modal('hide');
            } else {
                // swal(res.message, "", "error");
            }
        })
    }
    updatedSkus = [];
    wholesalerId;
    updateProduct() {
        // this.spinnerService.show();
        // setTimeout(() => this.spinnerService.hide(), 12000)
        for (var k = 0; k < this.skusData.length; k++) {
            this.skusData[k].product_id = this.action;
            this.skusData[k].image_quality_path = this.skusData[k].image_quality_path;
            // if (this.image2 === undefined) {
            //     this.skusData[k].image_quality_path = this.skusData[k].quality_image;
            //     this.skusData[k].quality_image = (this.image2 === undefined || this.image2 === '') ? '' : this.strImage;
            // }

            for (var j = 0; j < this.skusData[k].sku_images.length; j++) {
                if (this.skusData[k].sku_images[j].sku_img_path === undefined) {
                    // this.skusData[k].sku_images[j].id = this.skusData[k].sku_images[j].sku_image_id;
                    // this.skusData[k].sku_images[j].sku_id = this.skusData[k].skid;
                    // this.skusData[k].sku_images[j].product_id = this.action;
                    // this.skusData[k].sku_images[j].sku_img_path = '';
                    // this.skusData[k].sku_images[j].new_image = '';
                }

            }

        }

        this.newSkuData = this.skusData;

        for (var i = 0; i < this.newSkuData.length; i++) {
            this.newSkuData[i].terms = {
                "id": (this.newSkuData[i].terms === '' || this.newSkuData[i].terms === undefined) ? '' : this.newSkuData[i].terms.id,
                "data": this.newSkuData[i].termscnd,
                "last_updated": new Date(),
                "is_footer": null,
                "product_id": this.sellerId,
                // "sku_id": this.newSkuData[i].skid
            }

            // this.newSkuData[i].faq = {
            //     "id": (this.newSkuData[i].faq === '' || this.newSkuData[i].faq === undefined) ? '' : this.newSkuData[i].faq.id,
            //     "question": this.newSkuData[i].question,
            //     "answer": this.newSkuData[i].answer,
            //     "product_id": parseInt(this.newSkuData[i].product_id),
            //     "sku_id": this.newSkuData[i].skid
            // }

            // "skid": 885,
            // "product_id": 2377,
            // "units": "",
            // "size": "xl",
            // "color": "red",
            // "quantity": 3,
            // "actual_price": 100,
            // "selling_price": 90,
            // "discount": 10,
            // "stock": 5,


            this.updatedSkus.push({
                "skid": this.newSkuData[i].skid,
                // "id": parseInt(this.newSkuData[i].product_id),
                "size": this.newSkuData[i].size,
                "product_id": this.sellerId,
                // "type": this.newSkuData[i].type,
                "actual_price": (this.newSkuData[i].actual_price === undefined) ? parseInt(this.newSkuData[i].mrp) : this.newSkuData[i].actual_price,
                // "mrp": (this.newSkuData[i].mrp === undefined) ? parseInt(this.newSkuData[i].mrp) : this.newSkuData[i].mrp,
                // "min_quantity": (this.newSkuData[i].quantity !== undefined) ? parseInt(this.newSkuData[i].quantity) : this.newSkuData[i].min_quantity,
                "stock": this.newSkuData[i].stock,
                "selling_price": (this.newSkuData[i].sellingPrice !== undefined) ? parseInt(this.newSkuData[i].sellingPrice) : this.newSkuData[i].selling_price,
                "discount": this.newSkuData[i].discount,
                "quantity": this.newSkuData[i].quantity,
                "units": this.newSkuData[i].units,
                "color": this.newSkuData[i].color,
                // "offer_price": (this.newSkuData[i].offer !== undefined) ? parseInt(this.newSkuData[i].offer) : this.newSkuData[i].offer_price,
                // "image": this.type,
                // "express_delivery": this.newSkuData[i].express_delivery,
                // "normal_delivery": this.newSkuData[i].normal_delivery,
                // "image_quality_path": (this.newSkuData[i].image_quality_path === undefined) ? '' : this.newSkuData[i].image_quality_path,
                "quality_image": this.newSkuData[i].quality_image,
                // "description": (this.newSkuData[i].description === undefined) ? this.newSkuData[i].Description : this.newSkuData[i].description,
                "description": this.newSkuData[i].description,
                "specification": this.newSkuData[i].specification,
                // "sku_images": this.newSkuData[i].sku_images,  //images update
                "sku_images": [],

                // "country": this.newSkuData[i].country,
                // "state": this.newSkuData[i].state,
                // "city": this.newSkuData[i].city,
                // "area": this.newSkuData[i].area,
                // "sku_images": this.newSkuData[i].sku_images,
                "terms": this.newSkuData[i].terms_conditions,
                "faq": this.newSkuData[i].faq
            })
            console.log(this.updatedSkus);
            // this.updateSkuImg.push({
            //     "id": "223",
            //     "sku_id": this.newSkuData[i].skid,
            //     "sku_image": this.newSkuData[i].sku_images,
            //     "product_id": "",
            //     "sku_img_path": "",
            //     "new_image": ""

            // })

        }
        // {
        //     "id": 2158,
        //         "title": "mixed1",
        //             "category_id": 126,
        //                 "subcategory_id" : "146",
        //                     "brand_name": "FugenX",
        //                         "type" : "Main Product",
        //                             "sku": [
        //                                 {
        //                                     "skid": 767,
        //                                     "product_id": 2158,
        //                                     "size": "2",
        //                                     "actual_price": 500,
        //                                     "mrp": 500,
        //                                     "min_quantity": 2,
        //                                     "stock": 5,
        //                                     "selling_price": 400,
        //                                     "offer_price": 100,
        //                                     "quality_image": "http://versatilemobitech.co.in/Mahali/images/6_23_3_30_9263o2684qwjsy86fet.png",



        //                                     "sku_images": [
        //                                         {
        //                                             "id": "223",
        //                                             "sku_id": 79,
        //                                             "sku_image": "http://versatilemobitech.co.in/Mahali/images/6_23_3_30_9263o2684qwjsy86ffi.png",
        //                                             "product_id": "",
        //                                             "sku_img_path": "",
        //                                             "new_image": ""
        //                                         }

        //                                     ]

        //                                 }
        //                             ]
        // }
        //     "category_id" : 2,
        // "subcategory_id" : 2,
        // "product_name" : "abc;l;kl;kl",
        // "brand" : "dlklklef",
        // "country" : "india",
        // "description" : "vnjf;lkdjkn",
        // "organic": "true",
        // "vendor_id" : 0,
        // "wholesaller_id" : 1,

        var data = {
            // "id": this.sellerId,
            // "title": this.formdata.proName,
            "category_id": this.cat_id,
            "subcategory_id": this.subCat_id,
            // "type": this.prodtype,
            // "is_active": this.is_active,
            // "brand_id": this.brand_id,
            "brand": this.formdata.brand,
            "sku": this.updatedSkus,
            "vendor_id": 0,
            "wholesaller_id": this.wholesalerId,
            "country": this.formdata.country,
            "product_name": this.product_name,
            "description": this.textarea,
            "organic": this.organic,
            "subsubcategory_id": ""
            // "sku_images": this.skuImagesData
        }
        this.appService.updateWholeProd(this.sellerId, data)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    this.category = resp.result;
                    // this.spinnerService.hide();
                    // swal('update product successfully', '', 'success')
                    this.router.navigate(['/wholesellerproducts']);
                    // this.getProduct();
                }
                else {
                }
            },
                error => {
                    console.log(error, "error");
                })
    }
}
