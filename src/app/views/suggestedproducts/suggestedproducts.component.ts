import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-suggestedproducts',
  templateUrl: './suggestedproducts.component.html',
  styleUrls: ['./suggestedproducts.component.scss']
})
export class SuggestedproductsComponent implements OnInit {
  showStatus;
  Status;
  constructor(public router: Router, private appService: AppService) { }
  suggetedData = [];
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  editorder() {
    this.router.navigate(['/suggestedproducts/editsuggestedproducts']);
  }
  ngOnInit() {
    this.getSuggestedProds();
  }
  getSuggestedProds() {
    this.appService.getsuggestedProds().subscribe((res: any) => {
      // this.suggetedData = res.data;
      this.suggetedData = res.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  status(btn, prodId, Appr) {
    // btn.value = Appr;
    this.showStatus = !this.showStatus;
    if (this.showStatus) {
      btn.value = Appr === "active" ? "inactive" : "active"
    } else {
      btn.value = Appr
    }
    this.Status = Appr;
    this.Key = btn.value;
    var inData = {
      "status": this.Key
    }
    this.appService.changeStatusOfSuggested(inData, prodId).subscribe((res: any) => {
      if (res.status === 200) {
        // swal(res.json().message, "", "success");
      } else {
        // swal(res.json().message, "", "error");
      }
    })
  }
}
