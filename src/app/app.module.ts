import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';



const  routes: Routes = [
  {path: '', component: ListComponent},
{path: 'details/:id',component: DetailComponent}];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],

  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
