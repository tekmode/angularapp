import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';//for passing to other components
import {Observable} from 'rxjs/Observable';//for passing to other components
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private employees= new BehaviorSubject<any>(['Great','Service','Injected']);
employee=this.employees.asObservable();

constructor(private http:HttpClient) { }
changeemp(employee)
{
  this.employees.next(employee);
} 
doGET(){
  let url="http://localhost:3000/emp/employees";
  return this.http.get(url);
}
}
