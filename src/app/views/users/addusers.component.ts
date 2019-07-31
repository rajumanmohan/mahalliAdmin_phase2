import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {

  constructor(public router: Router) { }
  backtousers() {
    this.router.navigate(['/userslist']);
  }
  ngOnInit() {
  }

}
