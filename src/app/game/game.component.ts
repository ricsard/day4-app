import { Component, OnInit } from '@angular/core';
import { MemoGame } from './memo-game';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('stateVisible', [
      state('true', style({ transform: 'rotateY(0)' })),
      state('false', style({ transform: 'rotateY(180deg)' })),
      transition('true => false', animate('500ms ease')),
      transition('false => true', animate('500ms ease'))
    ]),
    trigger('show', [
      transition(':enter', [
        style({transform: 'scale(0)', opacity: 0}),
        animate('150ms ease-in', style({transform: 'scale(1)', opacity: 1}))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {

  game: MemoGame;
  elapsedTime = 0; // s
  timer: number = null;

  isGameOver = false;

  constructor(private http: HttpClient, private credentialsService: CredentialsService) {
    this.newGame();
  }

  startTimer() {
    const startTime = +new Date();
    const updateTime = () => {
      this.elapsedTime = Math.round(((+new Date()) - startTime) / 1000); // s
      this.timer = window.setTimeout(updateTime, 1000);
    };
    updateTime();
  }

  stopTimer() {
    window.clearTimeout(this.timer);
    this.timer = null;
  }

  newGame() {
    this.game = new MemoGame();
    this.game.gameOver.subscribe(() => {
      this.stopTimer();
      this.gameOver();
    });
    this.startTimer();
  }

  gameOver() {
    console.log('Game Over!!', this.elapsedTime);
    this.http.post('http://localhost:3000', {
      name: this.credentialsService.getNickname(),
      timestamp: +new Date(),
      time: this.elapsedTime
    }).subscribe();
    this.isGameOver = true;
  }

  ngOnInit() {
  }

}
