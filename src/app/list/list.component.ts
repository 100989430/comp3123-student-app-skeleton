import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public itemList;

  constructor(public service: AppService) 
  { 

    this.itemList = this.service.getList();
  }

  ngOnInit() {
  }

}
