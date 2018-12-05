import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddempComponent } from './addemp/addemp.component';
import { DelempComponent } from './delemp/delemp.component';
import { ShowempComponent } from './showemp/showemp.component';
import {DataService}  from './data.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddempComponent,
    DelempComponent,
    ShowempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule ,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
