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
  constructor(public router: Router, private appService: AppService) { }

  ngOnInit() {
    this.getSubsub();
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
      if (resp.json().result.length === 0) {
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
      if (resp.json().result.length === 0) {
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


