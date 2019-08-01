import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  // template: '<router-outlet></router-outlet>',
  template: `
  <div>
  <router-outlet></router-outlet>,
 <div>
 
 <ng4-loading-spinner [threshold]="1000" [timeout]="18000" [template]="template" [loadingText]="'Please wait...'"
 [zIndex]="9999">
</ng4-loading-spinner>
 </div>

  </div> 
`
  // });

})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
