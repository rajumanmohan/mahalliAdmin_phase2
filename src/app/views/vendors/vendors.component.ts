import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {


  constructor(public router: Router, private appService: AppService) { }
  // vendorproducts() {
  //   this.router.navigate(['/vendorslist/vendorproducts']);
  // }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  vendors = [];
  ngOnInit() {
    this.getVendors();
  }
  getVendors() {
    this.appService.getVendorsList().subscribe((resp: any) => {
      // this.vendors = resp.data;
      this.vendors = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  vendorproducts(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'vendorId': Id,

      }
    }
    this.router.navigate(['/vendorslist/vendorproducts'], navigationExtras);
  }
  // this.router.navigate(['/vendorslist/vendorproducts'], navigationExtras);
// }
EditVendor(Id){
  let navigationExtras: NavigationExtras = {
    queryParams: {
        'vendorId': Id,
        
    }
}
this.router.navigate(['/vendorslist/editvendors'], navigationExtras);
}
}
