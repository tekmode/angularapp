import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//to retrieve the variable sent from url
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { 
    this.route.params.subscribe(res => alert(res.id));
  }

  ngOnInit() {
  }
sendmehome(){
  this.router.navigate(['']);
}
}
