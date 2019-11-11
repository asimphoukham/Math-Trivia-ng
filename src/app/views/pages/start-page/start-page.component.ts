import { Component, OnInit } from '@angular/core';
import { TriviaGameService } from 'src/app/services/trivia-game/trivia-game.service';
import { OptionsService } from 'src/app/services/options/options.service';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  startBtn = 'Start';
  optionBtn = 'Options';

  constructor(
    private triviaGame: TriviaGameService,
    private optionsService: OptionsService
  ) {}

  ngOnInit() {}
}
