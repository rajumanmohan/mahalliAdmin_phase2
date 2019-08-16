import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
  filterValue: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.vendorcomission();
  }
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  commisionData;
  vendorcomission() {
    this.loadVendorCommision(0);
  }

  loadVendorCommision(id) {
    this.appService.getVendorCommision(id).subscribe((res: any) => {
      // this.commisionData = res.data;
      this.commisionData = res.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
      console.log(this.commisionData)
    })
  }

  onStatusChange(e, data) {
    var obj =
    {
      "is_paid": e.currentTarget.value
    }
    this.appService.updateStatWholeSaleCommision(data.id, obj).subscribe((res: any) => {
      Swal.fire(res.message, '', "success");
    })
  }

  onFilterStatChange(e) {
    this.filterValue = e.currentTarget.value;
  }

  Filter() {
    $('#filter2').modal('hide');
    this.loadVendorCommision(this.filterValue);
  }


}
