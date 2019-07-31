import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editsuggestedproducts',
  templateUrl: './editsuggestedproducts.component.html',
  styleUrls: ['./editsuggestedproducts.component.scss']
})
export class EditsuggestedproductsComponent implements OnInit {

  constructor(public router: Router) { }

  backtosuggested() {
    this.router.navigate(['/suggestedproducts']);
  }

  ngOnInit() {
  }

}
