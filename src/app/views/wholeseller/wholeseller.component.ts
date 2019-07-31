import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
declare let swal: any;

@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.scss']
})
export class WholesellerComponent implements OnInit {
  roletype;
  constructor(public router: Router, private appService: AppService) {

  }
  wholeSellers = [];
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  addwholeseller() {
    this.router.navigate(['/wholeseller/addwholeseller']);
  }
  wholesellerproducts() {
    this.router.navigate(['/wholeseller/wholesellerproducts']);
  }

  getWholeSeller() {
    this.appService.getWholeSeller().subscribe((resp: any) => {
      this.wholeSellers = resp.data;
      this.wholeSellers = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }


  ngOnInit() {
    this.getWholeSeller();
  }
  product(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'salerproductId': Id
      }
    }
    this.router.navigate(['wholeseller/wholesellerproducts'], navigationExtras);
  }
  delete(id) {
    var data = {
      "id": id
    }
    this.appService.deleteWholeSeller(data).subscribe((resp: any) => {
      if (resp.status === 200) {
        swal(resp.message, '', 'success');
        this.getWholeSeller();
      } else if (resp.status === 400) {
        swal(resp.message, '', 'error');
      }
    })
  }
  edit(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'sellerId': Id
      }
    }
    this.router.navigate(['wholeseller/addwholeseller'], navigationExtras);
  }


}
