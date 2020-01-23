import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public credentialsService: CredentialsService) { }

  ngOnInit() {
  }

  logout() {
    this.credentialsService.removeNickname();
  }

}
