import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ExcelService } from '../../services/excel.service';
declare let jsPDF;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public router: Router, private appService: AppService, private excelService: ExcelService) { }
  usersList = [];
  showSuccessAlert=false;
  showErrorAlert=false;
  addusers() {
    this.router.navigate(['/userslist/addusers']);
  }
  ngOnInit() {
    this.getUsersList();
  }

  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  getUsersList() {
    this.appService.getUsersList().subscribe((resp: any) => {
      // this.usersList = resp.data;
      this.usersList = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  view(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'userId': Id
      }
    }
    this.router.navigate(['/userslist/addusers'], navigationExtras);
  }

  
exportAsXLSX(): void {

  var tempUserList =  [];
      for(var i=0;i<this.usersList.length; i++){
        var tempObj = {};
        tempObj['id'] = this.usersList[i].reg_id;
        tempObj['First_Name']= this.usersList[i].first_name;
        tempObj['Last_Name']= this.usersList[i].last_name;
        tempObj['Email']= this.usersList[i].email;
        tempObj['Mobile_Number']= this.usersList[i].mobile_number;
        tempObj['Date']= this.usersList[i].date;

        tempUserList.push(tempObj);
      }

  if(tempUserList.length > 0)
    this.excelService.exportAsExcelFile(tempUserList, 'Mahalli');
}

  exportAsPdf() {
    var tempUserList =  [];
      for(var i=0;i<this.usersList.length; i++){
        var tempObj = {};
        tempObj['id'] = this.usersList[i].reg_id;
        tempObj['First_Name']= this.usersList[i].first_name;
        tempObj['Last_Name']= this.usersList[i].last_name;
        tempObj['Email']= this.usersList[i].email;
        tempObj['Mobile_Number']= this.usersList[i].mobile_number;
        tempObj['Date']= this.usersList[i].date;

        tempUserList.push(tempObj);
      }
   
      if(tempUserList.length == 0){
        return false;
      }
  
    let fields = Object.keys(tempUserList[0]);
    console.log('fields', fields);
    let tableCol = [];
    for (let f of fields) {
      tableCol.push({ title: f, dataKey: f });
    }
  
    var doc = new jsPDF('l', 'pt', [1200, 500]);
   
    doc.setFontSize(12);
    doc.text('Reports', 40, 20);
    doc.setFontSize(10);
    doc.autoTable(tableCol, tempUserList, {      
      columnStyles: {
        'id': {columnWidth: 30},
        'First_Name': {columnWidth: 60},
        'Last_Name': {columnWidth: 60},
        'Email': {columnWidth: 100},
        'Mobile_Number': {columnWidth: 100},
        'Date': {columnWidth: 100}
      },
      printHeaders: true, startY: 40, headerStyles: { fillColor: [100] }
    });
    doc.save('user_report_' + new Date());
  }

  onUserStatusChange(event, userId) {
    var requestObj = {
      IsActive: event.currentTarget.value
    }

    this.appService.updateUserbyId(requestObj, userId).subscribe((resp: any) => {
      if (resp.status == 200) {        
		 this.showSuccessAlert=true;
		  setTimeout(()=>{
			  this.showSuccessAlert=false;
		  },2000);
        this.getUsersList();
      }else{
		   this.showErrorAlert=true;
		  setTimeout(()=>{
			  this.showErrorAlert=false;
		  },2000);
	  }
    })
  }
  
}
