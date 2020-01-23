import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxListLibModule, NgxListLibIntl } from 'ngx-list-lib';
import { TimePipe } from './time.pipe';
import { MatGridListModule } from '@angular/material/grid-list';


export function ngxListLibIntlFactory() {
  const intl = new NgxListLibIntl();
  intl.listTitle = 'Leaderboard';
  intl.listItemHeader = (i) => `${i + 1} helyezett`;
  return intl;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeaderboardComponent,
    HomeComponent,
    LoginComponent,
    GameComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxListLibModule,
    MatGridListModule
  ],
  providers: [
    { provide: NgxListLibIntl, useFactory: ngxListLibIntlFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
