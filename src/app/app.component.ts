import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AriNgTrivia';
  theme = new Howl({
    src: ['./assets/Happy.mp3'],
    loop: true,
    volume: 1
  });

  ngOnInit() {
   /*  this.theme.play(); */
  }
}
