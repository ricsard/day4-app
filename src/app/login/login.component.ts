import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CredentialsService } from '../credentials.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
   nickname: new FormControl('', [Validators.required, Validators.minLength(5)])
  });


  constructor(private credentialsService: CredentialsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.credentialsService.setNickname(this.form.value.nickname);
    this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
  }

}
