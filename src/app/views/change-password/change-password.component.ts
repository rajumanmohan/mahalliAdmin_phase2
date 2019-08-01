import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  resetForm: FormGroup;
  addressForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      retype_password: ['', [Validators.required]],
    });

  }
  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    } else if (this.resetForm.value.new_password != this.resetForm.value.retype_password) {
      Swal.fire("Passwords doesn't matched", '', "warning");
      // swal("Passwords doesn't matched", "", "warning");
      return;
    }
    delete this.resetForm.value.retype_password;
    this.appService.changePwd(this.resetForm.value).subscribe((resp: any) => {
      if (resp.status === 200) {
        Swal.fire(resp.message, '', "success");

        // this.router.navigate(['/'])
      } else {
        Swal.fire(resp.message, '', "error");
        // swal(resp.json().message, "", "error");
      }


    }, err => {
      Swal.fire(err.message, '', "error");
      // swal(err.json().message, "", "error");
    })


  }

}
