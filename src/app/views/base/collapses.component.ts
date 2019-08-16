import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
// import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';


@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent implements OnInit {

  SubsubCategory = [];
  grocerySubCats;
  ecomSubcats;
  actionType;
  categories = [];
  subCategories = [];
  selectedCategoryId = 0;
  p=1;
  
  constructor(public router: Router, private appService: AppService) { }

  ngOnInit() {
    this.actionType = 'grocery';
    this.getGroceryCategories();
  }

  getGroceryCategories() {
    this.getSubsub();
    this.categories = [];
  this.subCategories = [];
  this.SubsubCategory = [];
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
                this.categories = resp.categories;
                // this.spinnerService.hide();
            }
            else {

            }
        },
            error => {

                console.log(error, "error");
            })
}

getEcomCategories(){
  this.getSubsubEcom();
  this.categories = [];
  this.subCategories = [];
  this.SubsubCategory = [];
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
  this.selectedCategoryId = categoryId;
  this.subCategories = [];
  this.SubsubCategory = [];
  this.getSubCategoriesByCategoryId(categoryId);
}

getSubCategoriesByCategoryId(categoryId){
  this.appService.getSubCategoriesByCategoryId(categoryId).subscribe((resp: any) => {
    this.subCategories = resp.sub_category;
  })
}

onSubCategoryChange(subCategoryId){
  this.SubsubCategory = [];
  this.getSubSubCategoriesByCatIdAndSubCatId(this.selectedCategoryId, subCategoryId);
}

getSubSubCategoriesByCatIdAndSubCatId(categoryId, subCategoryId){
  this.appService.getSubSubCategoriesByCategoryIdSubCategoryId(categoryId, subCategoryId).subscribe((resp: any) => {
    this.SubsubCategory = resp.sub_sub_category;
  })
}

  newsubsubCat(id, maincat, subcat, maincatId, action, img, des, sscID) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'subCat': subcat,
        'mainCat': maincat,
        'id': id,
        'mainCatId': maincatId,
        'action': action,
        'img': img,
        'des': des,
        'actionType': this.actionType
      }
    }
    this.router.navigate(['/Category/addsubsubcategories'], navigationExtras);
  }
  getSubsub() {
    this.grocerySubCats = true;
    this.ecomSubcats = false;
    this.actionType = "grocery";
    // this.spinnerService.show();
    this.appService.getSubsub().subscribe((resp: any) => {
      // this.spinnerService.hide();
      this.SubsubCategory = resp.result;
      console.log(this.SubsubCategory);
      if (resp.result.length === 0) {
        // swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }

  getSubsubEcom(){
    
    this.grocerySubCats = false;
    this.ecomSubcats = true;
    this.actionType = "ecom";
    // this.spinnerService.show();
    this.appService.getSubsubEcom().subscribe((resp: any) => {
      // this.spinnerService.hide();
      this.SubsubCategory = resp.result;
      console.log(this.SubsubCategory);
      if (resp.result.length === 0) {
        // swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }

  getEcomSubCategory() {
    this.grocerySubCats = false;
    this.ecomSubcats = true;
    this.actionType = "ecom";
    // this.spinnerService.show();
    this.appService.getSubsubEcom().subscribe((resp: any) => {
      // this.spinnerService.hide();
      this.SubsubCategory = resp.result;
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
    this.appService.delSubsub(id).subscribe((resp: any) => {
      // this.spinnerService.hide();
      // swal("delete subCat successfully", '', 'success');
      this.getSubsub();
    })
    // } else {
    //   return;
    // }
    // });

  }
  addSub(id, maincat, subcat, maincatId, action, img, des, sscID, subName) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'subCat': subcat,
        'mainCat': maincat,
        'id': id,
        'mainCatId': maincatId,
        'action': action,
        'img': img,
        'des': des,
        'actionType': this.actionType,
        'sscName': sscID,
        "subName": subName
      }
    }
    this.router.navigate(['/Category/addsubsubcategories'], navigationExtras);
  }




}


