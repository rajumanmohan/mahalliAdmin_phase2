import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
// import { Router, NavigationExtras } from '@angular/router';
declare let swal: any;

@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent implements OnInit {

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  groceryCats;
  title;
  EcomCats;
  type;
  category;
  categories = [];
  p=1;
  constructor(public router: Router, private appService: AppService) { }
  grocerySubCats;
  ecomSubcats;
  actionType;
  subCategory = [];
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  addbanner() {
    this.router.navigate(['/Category/addsubcatbanners']);
  }
  addSub(id, maincat, subcat, maincatId, action, img, des) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': id,
        'mainCat': maincat,
        'subCat': subcat,
        'mainCatId': maincatId,
        'action': action,
        'img': img,
        'des': des,
        'actionType': this.actionType
      }
    }
    this.router.navigate(['/Category/addsubcatbanners'], navigationExtras);
  }

  // ngOnDestroy(): void {
  // }
  ngOnInit() {
    this.getGroceryCategories();
    this.actionType = 'grocery';
  

  }

    getGroceryCategories() {
      this.getSubCategory();
      this.categories = [];
      this.subCategory = [];
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        this.appService.getGroceryCat(Data)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    this.categories = resp.categories;
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
  
    getEcomCategories(){
      this.getEcomSubCategory();
      this.categories = [];
      this.subCategory = [];
      this.appService.getEcomCat({})
      .subscribe((resp: any) => {
          if (resp.status === 200) {
              this.categories = resp.categories;
          }
          else {

          }
      },
          error => {

              console.log(error, "error");
          })
      
    }

    onCategoryChange(categoryId){
      this.subCategory = [];
      this.getSubCategoriesByCategoryId(categoryId);
    }

    getSubCategoriesByCategoryId(categoryId){
      this.appService.getSubCategoriesByCategoryId(categoryId).subscribe((resp: any) => {
        this.subCategory = resp.sub_category.map(function (value, index) {
          value.indexValue = index;
          return value;
        })
      })
    }

  getSubCategory() {
    this.grocerySubCats = true;
    this.ecomSubcats = false;
    this.actionType = "grocery";
    // this.spinnerService.show();
    this.appService.getSubCategery().subscribe((resp: any) => {
      // this.spinnerService.hide();
      // this.subCategory = resp.result;
      this.subCategory = resp.result.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
      // if (resp.result.length === 0) {
      //   swal("No data found, please add new one", '', 'error');
    })
    // },
    //   error => {
    //     console.log(error, "error");
    //   }
    // )
  }
  getEcomSubCategory() {
    this.grocerySubCats = false;
    this.ecomSubcats = true;
    this.actionType = "ecom";
    // this.spinnerService.show();
    this.appService.getEcomSubcats().subscribe((resp: any) => {
      // this.spinnerService.hide();
      // this.subCategory = resp.result;
      this.subCategory = resp.result.map(function (value, index) {
        value.indexValue = index;
        return value;
      })

      if (resp.result.length === 0) {
        // swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }
  deleteSubCat(id) {
    // alert(id);
    // this.spinnerService.show();
    // swal("Do you want to delete?", "", "warning", {
    //   buttons: ["Cancel!", "Okay!"],
    // }).then((value) => {
    //   if (value === true) {
    var data = {
      'id': id
    }
    this.appService.deleteSubCat(data).subscribe(resp => {
      // this.spinnerService.hide();
      swal("SubCatetory deleted successfully", '', 'success');
      this.getSubCategory();
    })
    // } 
    //   else {
    //     return;
    //   }
    // });

  }


}
