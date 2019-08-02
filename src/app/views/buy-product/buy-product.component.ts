import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open("https://www.mahalli.com/mahaliVendorGrocery/", "_blank");
  }

}
