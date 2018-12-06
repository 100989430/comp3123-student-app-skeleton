import { Injectable } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

const FAKE_DB: any[] = [

  { id: 11, title: 'Fast & Furious', genre: 'Fantasy'},
  
  { id: 22, title: 'Scream', genre: 'Horror'},
  
  { id: 33, title: 'Star Wars', genre: 'Fiction'},
  { id: 44, title: 'Avengers', genre: 'Action'}
  
  ];
  

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getList()
  {
    return FAKE_DB;
  }

  getOneItem(itemID)
  {
    return FAKE_DB.find(row => row.id === +itemID )
  }
}
