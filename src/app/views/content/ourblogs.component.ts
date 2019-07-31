import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
declare let swal: any;

@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.scss']
})
export class OurblogsComponent implements OnInit {

  constructor(private appService: AppService) { }
  aboutusData;
  title;
  aboutusId;
  ngOnInit() {
    this.getAboutUs();
  }
  getAboutUs() {
    var inData =
    {
      "key": "Our blog"
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
