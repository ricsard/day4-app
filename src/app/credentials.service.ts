import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  static nicknameKey = 'MEMO_NAME';

  constructor() { }

  setNickname(nickname: string) {
    localStorage.setItem(CredentialsService.nicknameKey, nickname);
  }

  getNickname(): string | null {
    return localStorage.getItem(CredentialsService.nicknameKey);
  }

  hasNickname() {
    return this.getNickname() != null;
  }

  removeNickname() {
    localStorage.removeItem(CredentialsService.nicknameKey);
  }
}
