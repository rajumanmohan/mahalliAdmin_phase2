import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.scss']
})
export class WholesellerComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.wholecomission();
  }
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  commisionData;
  wholecomission() {
    this.appService.getWholeCommision().subscribe((res: any) => {
      // this.commisionData = res.data;
      this.commisionData = res.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
}
