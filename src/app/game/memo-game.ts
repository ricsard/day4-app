import { Subject } from 'rxjs';

export class MemoCard {
  value: string;
  visible = false;
  found = false;

  constructor(value: string) {
    this.value = value;
  }

  flip() {
    this.visible = !this.visible;
  }
}

export class MemoGame {

  gameOver = new Subject();

  board: MemoCard[][];
  selectedCards: MemoCard[] = [];

  constructor() {
    // 4x6
    const x = 6;
    const y = 4;

    // create new card deck
    const deck = [];
    for (let i = 0; i < y * x / 2; i++) {
      deck.push(new MemoCard(`C${i + 1}`));
      deck.push(new MemoCard(`C${i + 1}`));
    }
    // shuffle
    deck.sort(() => Math.random() - 0.5);

    // board
    this.board = [];
    for (let j = 0; j < y; j++) {
      this.board[j] = [];
      for (let i = 0; i < x; i++) {
        this.board[j][i] = deck[j * x + i];
      }
    }
  }

  canSelectMore() {
    return this.selectedCards.length < 2;
  }

  selectForCheck(card: MemoCard) {
    card.flip();
    this.selectedCards.push(card);
  }

  resetSelected() {
    this.selectedCards.forEach(c => c.found || c.flip());
    this.selectedCards = [];
  }

  checkState() {
    if (!this.canSelectMore()) {
      if (this.selectedCards[0].value === this.selectedCards[1].value) {
        this.selectedCards[0].found = true;
        this.selectedCards[1].found = true;
        this.resetSelected();
      }
    }
    if (this.board.every(row => row.every(card => card.found))) {
      this.gameOver.next();
      this.gameOver.complete();
    }
  }

  selectCard(j: number, i: number) {
    const card = this.board[j][i];

    if (!this.canSelectMore()) {
      this.resetSelected();
      return;
    }

    if (card.visible) {
      return;
    }

    this.selectForCheck(card);
    this.checkState();
  }
}

