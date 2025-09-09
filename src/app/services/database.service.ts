import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  semesters = [{index:1},{index:2},{index:3},{index:4},{index:5},{index:6},{index:7},{index:8}];

  sendSemData(){
    return this.semesters;
  }
}
