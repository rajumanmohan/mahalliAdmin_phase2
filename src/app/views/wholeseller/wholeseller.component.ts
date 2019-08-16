import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
declare let swal: any;

@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.scss']
})
export class WholesellerComponent implements OnInit {
  roletype;
  selectedFile=null;
  showSuccessAlert=false;
  showErrorAlert=false;
  showImportForm=false;
  constructor(public router: Router, private appService: AppService) {

  }
  wholeSellers = [];
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  addwholeseller() {
    this.router.navigate(['/wholeseller/addwholeseller']);
  }
  wholesellerproducts() {
    this.router.navigate(['/wholeseller/wholesellerproducts']);
  }

  getWholeSeller() {
    this.appService.getWholeSeller().subscribe((resp: any) => {
      this.wholeSellers = resp.data;
      this.wholeSellers = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }


  ngOnInit() {
    this.getWholeSeller();
  }
  product(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'salerproductId': Id
      }
    }
    this.router.navigate(['wholeseller/wholesellerproducts'], navigationExtras);
  }
  delete(id) {
    var data = {
      "id": id
    }
    this.appService.deleteWholeSeller(data).subscribe((resp: any) => {
      if (resp.status === 200) {
        swal(resp.message, '', 'success');
        this.getWholeSeller();
      } else if (resp.status === 400) {
        swal(resp.message, '', 'error');
      }
    })
  }
  edit(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'sellerId': Id
      }
    }
    this.router.navigate(['wholeseller/addwholeseller'], navigationExtras);
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

  this.appService.wholesalerbulkupload(this.selectedFile)
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
  onWholesellerStatusChange(event, vendorId) {
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
}
