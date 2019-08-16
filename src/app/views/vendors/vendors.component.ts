import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {


  constructor(public router: Router, private appService: AppService) { }
  // vendorproducts() {
  //   this.router.navigate(['/vendorslist/vendorproducts']);
  // }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  vendors = [];
  selectedFile=null;
  showSuccessAlert=false;
  showErrorAlert=false;
  showImportForm=false;
  ngOnInit() {
    this.getVendors();
  }
  getVendors() {
    this.appService.getVendorsList().subscribe((resp: any) => {
      // this.vendors = resp.data;
      this.vendors = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  vendorproducts(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'vendorId': Id,

      }
    }
    this.router.navigate(['/vendorslist/vendorproducts'], navigationExtras);
  }

  onVendorStatusChange(event, vendorId) {
    var requestObj = {
      IsActive: event.currentTarget.value
    }

    this.appService.updateVendorbyId(requestObj, vendorId).subscribe((resp: any) => {
      if (resp.status == 200) {
		  this.showSuccessAlert=true;
		  setTimeout(()=>{
			  this.showSuccessAlert=false;
		  },2000);
        //swal('update vendor successfully', '', 'success');
       
      }else{
		  this.showErrorAlert=true;
		  setTimeout(()=>{
			  this.showErrorAlert=false;
		  },2000);
	  }
    })
  }
  onFileSelect(event){
  this.selectedFile = null;
  if(!!event.target && !!event.target.files[0]){
    if(event.target.files[0].name.split('.')[1] != 'xlsx'){
      alert('aceepts only xlsx formatted files');
      return false;
    }
    this.selectedFile = event.target.files[0];
  }
}

onImportClick(){
  if(!this.selectedFile){
    alert('Please choose file to continue');
    return false;
  }

  this.appService.vendorbulkupload(this.selectedFile)
  .subscribe((resp: any) => {
      if (resp.status === 200) {
        this.selectedFile = null;   
		this.showImportForm=!this.showImportForm;
		this.showSuccessAlert=true;
		setTimeout(()=>{
			this.showSuccessAlert=false;
		},2000);
      }
      else {
		this.showErrorAlert=true;
		setTimeout(()=>{
			this.showErrorAlert=false;
		},2000);
      }
  },
      error => {
          console.log(error, "error");
      })
}


  // this.router.navigate(['/vendorslist/vendorproducts'], navigationExtras);
// }
EditVendor(Id){
  let navigationExtras: NavigationExtras = {
    queryParams: {
        'vendorId': Id,
        
    }
}
this.router.navigate(['/vendorslist/editvendors'], navigationExtras);
}
}
