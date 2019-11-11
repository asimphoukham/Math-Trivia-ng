import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Trivia } from 'src/app/interfaces/trivia';
import { TriviaGameService } from 'src/app/services/trivia-game/trivia-game.service';
import { OptionsService } from 'src/app/services/options/options.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Config, CountdownComponent } from 'ngx-countdown';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit, OnDestroy {
  config: Config = {
    leftTime: 30
  };
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  subscription: Subscription = new Subscription();
  triviaQ: Trivia[] = [];
  qOrder: any[] = [];
  aOrder: any[] = [];
  qIndex: number;
  correctCount: number;
  q: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  userA: string;
  correctA: string;
  numQuestions = 10;
  answerA: any[];
  skipTotal: number;
  endGame: boolean;
  constructor(
    private triviaGameService: TriviaGameService,
    private optionsService: OptionsService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.varInit();
  }
  varInit() {
    this.triviaQ = [];
    this.qOrder = [];
    this.aOrder = [];
    this.answerA = [];
    this.qIndex = 0;
    this.correctCount = 0;
    this.q = 'Welcome!';
    this.a1 = 'Always';
    this.a2 = 'Do';
    this.a3 = 'Your';
    this.a4 = 'Best!';
    this.userA = '';
    this.correctA = '';
    this.skipTotal = 0;
    this.endGame = false;
    this.config = this.optionsService.getTimerLength();
    this.getQuestions();
  }
  getQuestions() {
    const level = this.optionsService.optionsLevel();
    this.subscription.add(
      this.triviaGameService.getTriviaQuestions(level)
        .subscribe(x => {
          console.log('This the API call --->>>> ', x);
          for (const q of x.feed.entry) {
            // console.log('this is qIndex', qIndex);
            const nfo: Trivia = {
              // tslint:disable-next-line: no-string-literal
              question: q['gsx$triviaquestion']['$t'],
              // tslint:disable-next-line: no-string-literal
              a1: q['gsx$answer1']['$t'],
              // tslint:disable-next-line: no-string-literal
              a2: q['gsx$answer2']['$t'],
              // tslint:disable-next-line: no-string-literal
              a3: q['gsx$answer3']['$t'],
              // tslint:disable-next-line: no-string-literal
              a4: q['gsx$answer4']['$t'],
              // tslint:disable-next-line: no-string-literal
              correctA: q['gsx$correctanswer']['$t']
            };
            // console.log('info: ', nfo);
            this.triviaQ.push(nfo);
          }
          this.triviaGameService.shuffleArray(this.qOrder, this.triviaQ.length);
          this.displayTriviaQ(this.userA);
          // console.log('This is the SERVICE shuffle -->', this.qOrder);
        })
    );
  }
  displayTriviaQ(ans: string) {
    if (this.qIndex < this.numQuestions) {
      if (this.qIndex > 0 && ans === this.correctA) {
        this.correctCount += 1;
        // alert('CORRECT!');
        this.toastr.success('CORRECT!', 'Great Job!');
      }  else if (ans === 'Not Answered') {
        this.skipTotal++;
      } else if (ans !== this.correctA) {
        // alert('Nice try, but the answer is ' + this.correctA);
        this.toastr.error(`but the answer is ${this.correctA}`, 'Nice try...');
      }
      this.triviaGameService.shuffleArray(this.aOrder, 4);
      /* console.log('This is the order of the answers --> ', this.aOrder);
      console.log(
        'displayTriviaQ() SAYS -> ',
        this.triviaQ[this.qOrder[this.qIndex]]
      ); */

      this.answerA[0] = this.triviaQ[this.qOrder[this.qIndex]].a1;
      this.answerA[1] = this.triviaQ[this.qOrder[this.qIndex]].a2;
      this.answerA[2] = this.triviaQ[this.qOrder[this.qIndex]].a3;
      this.answerA[3] = this.triviaQ[this.qOrder[this.qIndex]].a4;

      /*  setTimeout(() => {  */
      // console.log('This is index for answerA ===> ', this.answerA);

      this.a1 = this.answerA[this.aOrder[0]];
      this.a2 = this.answerA[this.aOrder[1]];
      this.a3 = this.answerA[this.aOrder[2]];
      this.a4 = this.answerA[this.aOrder[3]];
      this.answerA[0] = this.a1;
      this.answerA[1] = this.a2;
      this.answerA[2] = this.a3;
      this.answerA[3] = this.a4;
      this.q = this.triviaQ[this.qOrder[this.qIndex]].question;
      this.correctA = this.triviaQ[this.qOrder[this.qIndex]].correctA;
      /* console.log('This is the question -> ', this.q);
      console.log('This is a1 -> ', this.a1);
      console.log('This is a2 -> ', this.a2);
      console.log('This is a3 -> ', this.a3);
      console.log('This is a4 -> ', this.a4);
      console.log('This is the correct Answer -> ', this.correctA);
      console.log('This is correctCount -> ', this.correctCount); */
      this.qIndex++;
      console.log('This qIndex so NEXT Q is ->', this.qIndex);
      this.aOrder = [];
      this.counter.restart();
      this.config = this.optionsService.getTimerLength();
      /*   }, 2000); */
    } else {
      console.log('Else hit');
      if (ans === this.correctA) {
        this.correctCount += 1;
      }
      if (ans === 'Not Answered') {
        this.skipTotal++;
      }
      // alert('This the end! Your corrrect answer(s) is/are ' + this.correctCount);
      this.endGame = true;
      console.log(this.correctCount);
      this.router.navigate(['/', 'endGame'], { queryParams: { points: this.correctCount } }).then(
        nav => {
          console.log(nav); // true if navigation is successful
        },
        err => {
          console.log(err); // when there's an error
        }
      );
    }
  }
  onFinished() {
    this.displayTriviaQ('Not Answered');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
