import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data-service/data.service';
@Injectable({
  providedIn: 'root'
})
export class TriviaGameService {
  private apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  private apiKeypt2 = '1MkeLS3SiqYllMmU8AaX-RPcoWXFr05Zf_pPDRLsLe9E/';
  private apiURLpt3 = '/public/values?alt=json';
  constructor(private dataService: DataService) {}
  getTriviaQuestions(gameLevel: string): Observable<any> {
    return this.dataService.getURL(
      this.apiURLpt1 + this.apiKeypt2 + gameLevel + this.apiURLpt3
    );
  }
  shuffleArray(array: any[], len: number) {
    let temp: any;
    let index: any;
    for (let i = 0; i < len; i++) {
      // console.log('i: ', i);
      array.push(i);
    }
    /* console.log(
      'After for loop this is ARRAY[] --> ',
      array
    ); */
    // While there are elements in the array
    while (len > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * len);
      // Decrease len by 1
      // console.log('INSIDE WHILE  ---> ' + index);
      len--;
      // And swap the last element with it
      temp = array[len];
      array[len] = array[index];
      array[index] = temp;
    }
    // console.log('This is the index order of the ARRAY -> ', array);
    return array;
    // var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // console.log(shuffle(myArray));
  }
}
