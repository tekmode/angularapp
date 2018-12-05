import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AddempComponent} from './addemp/addemp.component';
import {DelempComponent} from './delemp/delemp.component';
import {ShowempComponent} from './showemp/showemp.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about/:id',
    component:AboutComponent
  },
  {
    path:'addemp',
    component:AddempComponent
  },
  {
    path:'showemp',
    component:ShowempComponent
  },
  {
    path:'delemp',
    component:DelempComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
