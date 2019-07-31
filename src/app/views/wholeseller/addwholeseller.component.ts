import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
declare var $: any;
declare let swal: any;
declare var jsPDF: any;
declare var google: any;
@Component({
    selector: 'app-addwholeseller',
    templateUrl: './addwholeseller.component.html',
    styleUrls: ['./addwholeseller.component.scss']
})
export class AddwholesellerComponent implements OnInit {
    addWholeseller = true;
    wholeSellers = [];
    sellerId;
    selerProId;
    roletype;
    constructor(public router: Router, private appService: AppService, private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            this.sellerId = params.sellerId
        });
        if (this.sellerId === undefined) {
            this.addWholeseller = true;
        } else {
            this.addWholeseller = false;
            this.getWholeSeller();
        }
        this.roletype = sessionStorage.getItem('role');
    }
    backtowholeseller() {
        this.router.navigate(['/wholeseller']);
    }
    ngOnInit() {
    }
    bussiness_name;
    bussiness_houseno;
    bussiness_address;
    bussiness_country;
    bussiness_area;
    bussiness_city;
    bussiness_pincode;
    first_name;
    last_name;
    email;
    password;
    mobile;
    commission_to_admin;
    currLat;
    currLng;
    from_date;
    to_date;
    account_holder_name;
    account_number;
    bank_name;
    bank_branch;
    ifsc_code;
    getLocation(getCallFun) {
        let _self = this;
        var geocoder = new google.maps.Geocoder();
        var address = this.bussiness_area;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.currLat = results[0].geometry.location.lat();
                // this.latitude = currLat;
                this.currLng = results[0].geometry.location.lng();
                getCallFun(this.currLat, this.currLng)
            }
        })
    }
    vat_number;
    cr_number;
    addWholeSeller() {
        let _self = this;
        // var geocoder = new google.maps.Geocoder();
        // var address = this.bussiness_area;
        // geocoder.geocode({ 'address': address }, function (results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         this.currLat = results[0].geometry.location.lat();
        //         // this.latitude = currLat;
        //         this.currLng = results[0].geometry.location.lng();
        //         if (this.currLat && this.currLng) {
        _self.getLocation(function getCallFun(lat, lan) {
            _self.currLat = lat;
            console.log(_self.currLat);
            _self.currLng = lan;
            var data = {
                "bussiness_latitude": _self.currLat,
                "bussiness_longitude": _self.currLng,
                "image_one": _self.urls[0].split(',')[1],
                "image_two": _self.urls[1].split(',')[1],
                "image_three": _self.urls[2].split(',')[1],
                "image_four": _self.urls[3].split(',')[1],
                "first_name": _self.first_name,
                "last_name": _self.last_name,
                "email": _self.email,
                "password": _self.password,
                "mobile_number": _self.mobile,
                "role": "wholesaler",
                "bussiness_name": _self.bussiness_name,
                "bussiness_houseno": _self.bussiness_houseno,
                "bussiness_address": _self.bussiness_address,
                "bussiness_country": _self.bussiness_country,
                "bussiness_area": _self.bussiness_area,
                "bussiness_city": _self.bussiness_city,
                "bussiness_pincode": _self.bussiness_pincode ? (_self.bussiness_pincode) : '',
                "commission_to_admin": _self.commission_to_admin ? (_self.commission_to_admin) : '',
                "bussiness_from_time": _self.from_date,
                "bussiness_end_time": _self.to_date,
                "account_holder_name": _self.account_holder_name,
                "account_number": _self.account_number,
                "bank_name": _self.bank_name,
                "bank_branch": _self.bank_branch,
                "ifsc_code": _self.ifsc_code,
                "vat_number": _self.vat_number,
                "cr_number": _self.cr_number
            }
            _self.appService.addWholeseller(data).subscribe((resp: any) => {
                if (resp.status === 200) {
                    // this.data = {};
                    _self.router.navigate(['/wholeseller']);
                    // swal(resp.message, '', 'success');
                } else if (resp.status == 400) {
                    // swal(resp.message, '', 'error');
                }
            })

        })
        // alert(this.currLat);
        // return;

    }
    newSkuData = [];
    skuImage;
    action;
    selectedImage;
    img;
    strImage;
    skusData;
    skuImge;
    imgSku;
    urls = [];
    images;
    ImgArr = [];
    skid;
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    console.log(e.target.result)
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
        }
    }
    valuechange(t) {
        // alert(t.taget.value);
    }
    getWholeSeller() {
        this.appService.getWholeSeller().subscribe((resp: any) => {
            this.wholeSellers = resp.data;
            for (var i = 0; i < this.wholeSellers.length; i++) {
                if (this.sellerId == this.wholeSellers[i].id) {
                    this.first_name = this.wholeSellers[i].first_name;
                    this.last_name = this.wholeSellers[i].last_name;
                    this.mobile = this.wholeSellers[i].mobile_number;
                    this.email = this.wholeSellers[i].email;
                    this.password = this.wholeSellers[i].password;
                    this.from_date = this.wholeSellers[i].bussiness_from_time;
                    this.to_date = this.wholeSellers[i].bussiness_end_time;
                    this.bussiness_name = this.wholeSellers[i].bussiness_name;
                    this.bussiness_houseno = this.wholeSellers[i].bussiness_houseno;
                    this.bussiness_address = this.wholeSellers[i].bussiness_address;
                    this.bussiness_country = this.wholeSellers[i].bussiness_country;
                    this.bussiness_area = this.wholeSellers[i].bussiness_area;
                    this.bussiness_city = this.wholeSellers[i].bussiness_city;
                    this.bussiness_pincode = this.wholeSellers[i].bussiness_pincode;
                    this.commission_to_admin = this.wholeSellers[i].commission_to_admin;
                    this.account_holder_name = this.wholeSellers[i].account_holder_name;
                    this.account_number = this.wholeSellers[i].account_number;
                    this.bank_name = this.wholeSellers[i].bank_name,
                        this.bank_branch = this.wholeSellers[i].bank_branch;
                    this.ifsc_code = this.wholeSellers[i].ifsc_code

                    return
                }
            }
        })
    }
    updateWholeSeller() {

        var data = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "password": this.password,
            "mobile_number": this.mobile,
            "role": "wholesaler",
            "bussiness_name": this.bussiness_name,
            "bussiness_houseno": this.bussiness_houseno,
            "bussiness_address": this.bussiness_address,
            "bussiness_country": this.bussiness_country,
            "bussiness_area": this.bussiness_area,
            "bussiness_city": this.bussiness_city,
            "bussiness_pincode": this.bussiness_pincode,
            "commission_to_admin": this.commission_to_admin,
            "bussiness_latitude": this.currLat,
            "bussiness_longitude": this.currLng,
            "bussiness_from_time": this.from_date,
            "bussiness_end_time": this.to_date,
            "account_holder_name": this.account_holder_name,
            "account_number": this.account_number,
            "bank_name": this.bank_name,
            "bank_branch": this.bank_branch,
            "ifsc_code": this.ifsc_code,
            "id": this.sellerId

        }
        this.appService.updateWholeSeller(data).subscribe((resp: any) => {
            if (resp.status === 200) {
                swal(resp.message, '', 'success');
                this.router.navigate(['/wholeseller']);
            } else if (resp.status === 400) {
                swal(resp.message, '', 'error');
            }
        })
    }
}
