import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
declare let swal: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.getAboutUs();
  }
  title;
  ckeditorContent;
  encodeData;
  termsData;
  decodeData;
  termsId;
  encodeData1;
  aboutusData;
  aboutusId;
  contentData = {
    title: '',
    description: ''
  }
  About() {
    var data = {
      'type': this.contentData.title,
      'description': this.contentData.description,
    }
    this.appService.saveFooter(data).subscribe((resp: any) => {
      if (resp.status === 200) {

      } else {

      }
    })
  }
  getAboutUs() {
    var inData =
    {
      "key": "About Us"
    }

    this.appService.getFooter(inData).subscribe((resp: any) => {
      this.aboutusData = resp.data[0].description;
      this.decodeData = atob(this.aboutusData);
      this.title = resp.data[0].type;
      this.aboutusId = resp.data[0].id;
    })
  }
  updateabout() {
    this.encodeData = btoa(this.ckeditorContent);

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
