import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let swal: any;

// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'app-addsubbanner',
    templateUrl: './addsubbanner.component.html',
    styleUrls: ['./addsubbanner.component.scss']
})
export class AddsubbannerComponent implements OnInit {
    actionType;
    categoryId;
    subCat;
    id;
    subCa;
    mainCat;
    subCate: boolean;
    action;
    caId;
    mainCatId;
    textarea;
    img;
    title;
    mainCat1;
	categoryForm: FormGroup;
  submitted = false;
    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute,private formBuilder:FormBuilder) {
        this.route.queryParams.subscribe(params => {
            this.id = params.id,
                this.subCa = params.subCat,
                this.mainCat1 = params.mainCat,
                this.mainCatId = params.mainCatId,
                this.action = params.action,
                this.img = params.img,
                this.textarea = params.des,
                this.actionType = params.actionType


        });
        if (this.action === 'addsub' || this.id === undefined || '' || null) {
            this.subCate = true;
        } else {
            this.subCate = false;
        }
    }
    backtosubcat() {
        this.router.navigate(['/Category/subcategories']);
    }
    ngOnInit() {
		let vald={
      mainCat1: ['', Validators.required],
      subCa: ['', Validators.required],
	  textarea:['',Validators.required],
	  img:[]
    }
		if(this.action === 'addsub'){
			vald.img=['',Validators.required];
		}
		this.categoryForm = this.formBuilder.group(vald);
		
        if (this.actionType === 'ecom') {
            this.getEcomCat();
            this.title = "Add Ecommerce Subcategory";
        } else {
            this.getCat();
            this.title = "Add Grocery Subcategory";

        }
    }
    category = [];

    getCat() {
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.spinnerService.show();
        this.appService.getGroceryCat(Data)
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
    changeCat(id) {
        // this.mainCat = id;
        for (var i = 0; i < this.category.length; i++) {
            if (id === this.category[i].category_name) {
                this.mainCat = this.category[i].id
            }
        }

    }
    image;
    insertSubCat() {
		this.submitted = true;
	if (this.categoryForm.invalid) {
        return;
    }
        // this.spinnerService.show();
        var data = {
            'sub_category_name': this.subCa,
            'category_id': this.mainCat,
            'image': this.strImage,
            'description': this.textarea,
            // "wholesaler_id": sessionStorage.wholesalerId
        }
        this.appService.insertSubCat(data).subscribe((resp: any) => {
            // this.spinnerService.hide();
            swal("subCategory Added successfully", '', 'success');
            this.router.navigate(['/Category/subcategories']);
        })
    }
    updateSubCat() {
		this.submitted = true;
	if (this.categoryForm.invalid) {
        return;
    }
        // this.spinnerService.show();
        var data = {
            'id': this.id,
            'sub_category_name': this.subCa,
            'category_id': this.mainCatId,
            'image': this.strImage,
            'description': this.textarea
        }
        this.appService.updateSubCat(data).subscribe((resp: any) => {
            // this.spinnerService.hide();
            swal("subCategory updated successfully", '', 'success');
            this.router.navigate(['/Category/subcategories']);
        })
    }
    strImage: any;
    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image = myReader.result;
            this.strImage = this.image.split(',')[1];
        }
        myReader.readAsDataURL(file);
    }


    deleteSubCat(id) {
        // alert(id);
        // this.spinnerService.show();
        // swal("Do you want to delete?", "", "warning", {
        //     buttons: ["Cancel!", "Okay!"],
        // }).then((value) => {
        // if (value === true) {
        var data = {
            'id': id
        }
        this.appService.deleteSubCat(data).subscribe(resp => {
            // this.spinnerService.hide();
            swal("subCategory deleted successfully", '', 'success');
            // this.getSubCategory();
        })
        //     } else {
        //         return;
        //     }
        // });

    }

}
