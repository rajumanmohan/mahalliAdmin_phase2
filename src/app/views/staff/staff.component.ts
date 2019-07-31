import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  constructor(public router: Router, private appService: AppService) {


  }
  key: string = 'name';
  reverse: boolean = true;
  addstaff(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'Id': Id,

      }
    }
    this.router.navigate(['/staff/addstaff'], navigationExtras);
  }
  ngOnInit() {
    this.getStaff();
  }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  staffData = [];

  getStaff() {
    this.appService.getStaff().subscribe((res: any) => {
      // this.staffData = res.data;
      this.staffData = res.data.map(function (value, index) {

        value.indexValue = index;
        return value;
      })
    })
  }
  deletestaff(id) {
    this.appService.deletestaff(id).subscribe((resp: any) => {
      // this.spinnerService.hide();
      // swal(" Staff Deleted successfully", '', 'success');
      this.getStaff();
    })
  }

}
