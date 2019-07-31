import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';
declare let swal: any;

@Component({
  selector: 'app-addbanners',
  templateUrl: './addbanners.component.html',
  styleUrls: ['./addbanners.component.scss']
})
export class AddbannersComponent implements OnInit {
  catname;
  id;
  addcat: boolean;
  pic;
  des;
  catImg;
  input;
  type
  image;
  strImage;
  textarea;
  typeVal;
  showCat;
  title;
  cattitle;
  constructor(public router: Router, private appService: AppService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.catname = params.name
      this.id = params.id
      this.pic = params.pic
      this.des = params.des
      this.type = params.type,
        this.typeVal = params.typeVal
    });
    if (this.catname === '' || this.id === undefined) {
      this.addcat = true;
      this.cattitle = "Add Category"
    } else {
      this.addcat = false;
      this.input = this.catname;
      this.textarea = this.des;
      this.catImg = this.pic;
      this.cattitle = "Edit Category"
    }
  }

  data = [];
  category = [];
  ngOnInit() {
    if (this.type === "grocery") {
      this.title = "Add Grocery Category";
    } else {
      this.title = "Add Ecommerce Category";

    }
  }
  backtobanner() {
    this.router.navigate(['/Category/categories']);
  }
  addCat(name) {
    // this.spinnerService.show();
    // if (this.strImage = this.textarea === '') {
    //     swal("Required filelds are missing", "", "warning");
    // }
    var data = {
      'name': name,
      'image': this.strImage,
      'description': this.textarea,
      'type': this.typeVal,
      "show_in_user": this.showCat
      // "wholesaler_id": sessionStorage.wholesalerId
    }
    this.appService.addCat(data)
      .subscribe((resp: any) => {
        if (resp.message === 'Success') {
          this.data = resp.result;
          // this.spinnerService.hide();
          swal('Category added Successfully', '', 'success');
          this.router.navigate(['/Category/categories']);

        }
        else if (resp.status === 400) {
          swal(resp.json().err_field, '', 'error');
        }
      },
        error => {
          console.log(error, "error");
        })
  }
  //update category
  updateCat(name) {
    // this.spinnerService.show();
    var data = {
      'name': name,
      'grocery_id': this.id,
      'image': this.strImage,
      'description': this.textarea,
      "show_in_user": this.showCat
    }
    this.appService.updateCat(data)
      .subscribe(resp => {
        // this.spinnerService.hide();
        swal('category updated successfully', '', 'success');
        this.router.navigate(['/Category/categories']);
      }),
      error => {
        console.log(error, "error");
      }
  }
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
  getGroceryCats() {
    let Data = {
      "country": "",
      "pin_code": "",
      "area": ""
    }
    // this.groceryCats = true;
    // this.title = "Grocery Categories";
    // this.EcomCats = false;
    // this.type = "grocery";
    // this.typeVal = 0;
    // this.spinnerService.show();
    this.appService.getGroceryCat(Data)
      .subscribe((resp: any) => {

        if (resp.status == 200) {
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
  getEcomCats() {
    let Data = {
      "country": "",
      "pin_code": "",
      "area": ""
    }
    // this.groceryCats = false;
    // this.title = "Ecommerce Categories"
    // this.EcomCats = true;
    // this.type = "ecommers";
    // this.typeVal = 1;
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
}
