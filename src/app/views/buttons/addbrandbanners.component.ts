import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-addbrandbanners',
  templateUrl: './addbrandbanners.component.html',
  styleUrls: ['./addbrandbanners.component.scss']
})
export class AddbrandbannersComponent implements OnInit {

  constructor(private router: Router) { }
  backtobrnadbanner() {
    this.router.navigate(['/buttons/brandbanner']);
  }
  ngOnInit() {
	  
  }
}
