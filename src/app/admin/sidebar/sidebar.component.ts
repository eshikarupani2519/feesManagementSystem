import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  count1=0;
  count2=0
  sem=false;
  sub=false;

  isAdminYN=true;

  semesterArray=new Array();

  constructor(private databaseServive:DatabaseService){}

  ngOnInit(){
    this.loadSemData()
  }
  semester() {
    this.count1++;
    if(this.count1%2!=0) this.sem=true;
    else this.sem=false;
  }
  subject() {
    this.count2++;
    if(this.count2%2!=0) this.sub=true;
    else this.sub=false;
  }

  loadSemData(){
    this.semesterArray=this.databaseServive.sendSemData()
  }
}
