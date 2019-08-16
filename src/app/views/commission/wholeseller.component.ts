import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.scss']
})
export class WholesellerComponent implements OnInit {

  filterValue: string;
  isHide: boolean;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.wholecomission();
  }
  Key;
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  commisionData;
  wholecomission() {
    this.loadCommisionData(0);
  }


  loadCommisionData(id) {
    this.appService.getWholeCommision(id).subscribe((res: any) => {
      // this.commisionData = res.data;
      this.commisionData = res.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
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
    this.loadCommisionData(this.filterValue);
  }




}
