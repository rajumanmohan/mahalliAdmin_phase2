
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attribute-master',
  templateUrl: './attribute-master.component.html',
  styleUrls: ['./attribute-master.component.scss']
})
export class AttributeMasterComponent implements OnInit {
  unit: any;
  size: any;
  isListAvailable: boolean = true;
  attributeList: any;
  angForm: FormGroup
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      Unit: ['', Validators.required],
      Size: ['', Validators.required]
    });

    this.getAttributesData();
  }

  onAddAttrClick() {
    this.isListAvailable = false;
  }

  getAttributesData() {
    this.isListAvailable = true;
    try {
      // this.spinnerService.show();
      this.appService.getAttributeData()
        .subscribe((resp: any) => {
          if (resp.status == 200) {
            // this.name = ""
            this.attributeList = resp.attributes.map(function (value, index) {
              value.indexValue = index;
              return value;
            })
          }
          else {
          }
        },
          error => {
            console.log(error, "error");
          })
    }
    catch (ex) {

    }

  }

  onSubmit() {
    if (!this.angForm.valid) {
      return;
    }
    this.appService.postAttributeMst(this.angForm.value).subscribe((resp: any) => {
      console.log(resp)
      Swal.fire(resp.message, '', "success");
      this.getAttributesData();
    }, err => {
      Swal.fire(err.message, '', "error");
    });

  }
}
