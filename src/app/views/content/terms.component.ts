import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
declare let swal: any;

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private appService: AppService) { }
  aboutusData = [];
  title;
  aboutusId;
  ngOnInit() {
    this.getAboutUs();
  }
  getAboutUs() {
    var inData =
    {
      "key": "Terms & conditions"
    }

    this.appService.getFooter(inData).subscribe((resp: any) => {
      this.aboutusData = resp.data[0].description;
      this.title = resp.data[0].type;
      this.aboutusId = resp.data[0].id;
    })
  }
  updateabout() {
    // this.encodeData = btoa(this.ckeditorContent);

    var data =
    {
      "id": this.aboutusId,
      "description": this.aboutusData

    }

    this.appService.updateFooter(data).subscribe((resp: any) => {
      if (resp.status === 200) {
        swal(resp.message, '', 'success');

      }
    })
  }
}
