import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
public itemID:string;
 items: AppService

  constructor(private route: ActivatedRoute, public appService:AppService) 
  { 
  this.itemID = this.route.snapshot.paramMap.get('id');
  this.items= this.appService.getOneItem(this.itemID);
  }

  ngOnInit() {
  }

}
