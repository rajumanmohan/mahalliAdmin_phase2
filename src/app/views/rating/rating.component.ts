import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  constructor(public router: Router, private appService: AppService) {
  }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  Status = [];
  ngOnInit() {
    this.Status = ["true", "false"]
    this.getratings();
  }
  ratings = [];

  getratings() {
    this.appService.getratingsandreviews().subscribe((res: any) => {
      this.ratings = res.ratingandreview;
      console.log(res.ratingandreview)
      // this.staffData = res.data.map(function (value, index) {

      //   value.indexValue = index;
      //   return value;
      // })
    })
  }
  statusChange(status, Id) {
    var inData = {
      "Status": status
    }
    console.log()
    this.appService.acceptRating(Id, inData).subscribe((res: any) => {
      if (res.status === "200") {
        // swal(res.message, "", "success");
        console.log(res);
        this.getratings();
      }
    })
  }
}
