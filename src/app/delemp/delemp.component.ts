import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-delemp',
  templateUrl: './delemp.component.html',
  styleUrls: ['./delemp.component.css']
})
export class DelempComponent implements OnInit {
   employees=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.employee.subscribe(res => this.employees=res);
   
  }
 }
