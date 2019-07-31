
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
  angForm: FormGroup
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      Unit: ['', Validators.required],
      Size: ['', Validators.required]
    });
  }
  onSubmit() {
    if (!this.angForm.valid) {
      return;
    }
    this.appService.postAttributeMst(this.angForm.value).subscribe((resp: any) => {
      console.log(resp)
      Swal.fire(resp.message, '', "success");
    }, err => {
      Swal.fire(err.message, '', "error");
    });

  }
}
