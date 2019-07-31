import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
declare var jsPDF: any; 
@Component({
  selector: 'app-imageapproval',
  templateUrl: './imageapproval.component.html',
  styleUrls: ['./imageapproval.component.scss']
})
export class ImageapprovalComponent implements OnInit {
  prodId;
  constructor(private appService: AppService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.prodId = params.prodId;
    })
   }
  imgData=[];
  skuDetsils=[];
  productData=[];
  proddata;
  proddata1;
  description;
  clicked;
  ngOnInit() {
    this.getProdData();
  }
  getProdData() {
    this.skuDetsils = [];
    this.clicked = 0;
    this.appService.wholesalerById(this.prodId).subscribe((res:any) => {
      this.proddata = res.products[0].sku;
      this.proddata1 = res.products[0].sku[0];
      this.productData = res.products[0];

      if (this.proddata != undefined) {
        this.skuDetsils.push(this.proddata1);
        // for(var i=0;i<this.proddata.length;i++){
        //   this.skuData = this.proddata[0];
        // //   for(var j=0;j<this.proddata[i].sku.length;j++){
        // // this.imgData = this.proddata[i].sku[j].sku_images;
        // //   }
        // }
        this.imgData =res.products[0].sku[0].sku_images;
      }

      // this.proddata1 = res.products[0];
      this.description = (res.products[0].description)

    })
  }
  getSkuData(skiId,index) {
    this.skuDetsils=[];
    this.clicked = index;
    // this.appService.wholesalerById(skuId).subscribe(res=> {
    // this.proddata = res.products;
    if (this.proddata != undefined) {

      for (var i = 0; i < this.proddata.length; i++) {
     if(skiId ==  this.proddata[i].skid){
      this.proddata1 = this.proddata[i].sku;
      // this.proddata1.clicked  = this.proddata[i].
      this.skuDetsils.push(this.proddata1);
      this.imgData =this.proddata[i].sku.sku_images;

     }
      }
    }

    // this.proddata1 = res.json().products[0];
    // this.description = (res.json().products[0].description)

    // })
  }

  Approve(skid) {
    var inData = {
      "Sku_images_approve": 'approve'
    }
    this.appService.ImgApproval(skid, inData).subscribe((res:any) => {
      if (res.status == 200) {
        // swal(res.message,"","success");
        $('#descriptionModla').show();
      }
    })
  }
  block(skid) {
    var inData = {
      "Sku_images_approve": 'disapprove'
    }
    this.appService.ImgApproval(skid, inData).subscribe((res:any) => {
      if (res.status == 200) {
        // swal(res.message, "", "success");
        $('#exampleModal').show();

      }

    })
  }
}
