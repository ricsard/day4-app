import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaderboardItem } from '../leaderboard-item';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard: LeaderboardItem[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<LeaderboardItem[]>('http://localhost:3000').subscribe(x => this.leaderboard = x);
  }

}
