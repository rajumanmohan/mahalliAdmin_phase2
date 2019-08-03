import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
declare let swal: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsteller',
  templateUrl: './newsteller.component.html',
  styleUrls: ['./newsteller.component.scss']
})
export class NewstellerComponent implements OnInit {

  constructor(private appService: AppService) { }
  aboutusData = [];
  title;
  aboutusId;
  emailaddres;
  isFormValid=true;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit() {
    this.getAboutUs();
  }
  getAboutUs() {
    var inData =
    {
      "key": "News letter"
    }

    this.appService.getFooter(inData).subscribe((resp: any) => {
      this.aboutusData = resp.data[0].description;
      this.title = resp.data[0].type;
      this.aboutusId = resp.data[0].id;
    })
  }

  updateabout() {
    // this.encodeData = btoa(this.ckeditorContent);
    if (this.title && this.aboutusData && this.emailaddres) {
      var emails;
      if (this.emailaddres) {
        emails = this.emailaddres.split(";");
      }
      
      var data =
      {
        "array": emails,
        "subject": this.aboutusData,
        "text": this.title
      }

      this.appService.sendnewsletter(data).subscribe((resp: any) => {
        if (resp.status === 200) {
          Swal.fire(resp.message, '', "success");
          // swal(resp.message, '', 'success');
        }
        else if (resp.status == 400) {
          Swal.fire(resp.message, '', "error");
        }
      });
    }
    else {
      this.isFormValid = false;
    }
  }
}
