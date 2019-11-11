import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private gameDifficulty = '1';
  private cTimer = 30;
/*   private numQuestions = 10; */

  constructor() {}
  setDifficulty(level: string) {
    this.gameDifficulty = level;
    switch (level) {
      case '1':
        /* this.cTimer = 5; */
        /* this.numQuestions = 10; */
        break;
      case '2':
       /*  this.cTimer = 30; */
        /* this.numQuestions = 12; */
        break;
      case '3':
        /* this.cTimer = 45; */
        /* this.numQuestions = 15; */
        break;
      default:
        break;
    }
  }
 /*  getNumQuestions() {
    return this.numQuestions;
  } */
  getTimerLength() {
    return { leftTime: this.cTimer };
  }
  optionsLevel() {
    return this.gameDifficulty;
  }
}
