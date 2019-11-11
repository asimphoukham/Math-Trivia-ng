import { Component, OnInit } from '@angular/core';
import { TriviaGameService } from 'src/app/services/trivia-game/trivia-game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit {
  correctCount: number;

  constructor(private gameService: TriviaGameService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams.points);
// tslint:disable-next-line: radix
    this.correctCount = parseInt(this.route.snapshot.queryParams.points);
 /*    this.totalCorrect = this.gameService.getTotalCorrect();
    this.totalTimeOut = this.gameService.getotalTimeOut();
    this.totalQuestion = this.gameService.getotalQuestion(); */
  }
  // queryparams
}
