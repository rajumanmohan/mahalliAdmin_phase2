import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.vendorcomission();
  }
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  commisionData;
  vendorcomission() {
    this.appService.getVendorCommision().subscribe((res: any) => {
      // this.commisionData = res.data;
      this.commisionData = res.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
      console.log(this.commisionData)
    })
  }
}
