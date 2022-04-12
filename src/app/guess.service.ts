import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PlayerInfo } from './player-info.model';

@Injectable({
  providedIn: 'root',
})
export class GuessService {
  answer!: PlayerInfo;
  guesses: PlayerInfo[] = [];
  winner = false;
  loser = false;
  private _answerSource = new Subject<PlayerInfo>();
  answer$ = this._answerSource.asObservable();
  private _guessesSource = new Subject<PlayerInfo[]>();
  guesses$ = this._guessesSource.asObservable();
  private _winnerSource = new Subject<boolean>();
  winner$ = this._winnerSource.asObservable();
  private _loserSource = new Subject<boolean>();
  loser$ = this._loserSource.asObservable();

  constructor() {}

  sendGuesses() {
    this._guessesSource.next(this.guesses);
  }

  setAnswer(answer: PlayerInfo) {
    this.answer = answer;
    this._answerSource.next(answer);
  }

  onSubmit(dummyData: PlayerInfo) {
    console.log(dummyData);
    let playerDOB = dummyData.dateOfBirth.slice(0, 10);
    let age = this.getAge(playerDOB);

    dummyData.age = age;
    console.log(dummyData);
    console.log(this.guesses);
    this.guesses.push(dummyData);
    let index = this.guesses.length - 1;

    console.log(this.guesses);
    if (this.guesses[index].name === this.answer.name) {
      this.winner = true;
      this._winnerSource.next(true);
    } else if (this.guesses.length === 5 && this.winner === false) {
      this.loser = true;
      this._loserSource.next(true);
    }
  }

  getAge(playerDOB: string): number {
    let age: number;
    let playerDOBYear = +playerDOB.slice(0, 4);
    let playerDOBMonth = +playerDOB.slice(5, 7);
    let playerDOBDate = +playerDOB.slice(8, 10);
    let date = new Date();

    age = date.getFullYear() - playerDOBYear;
    let m = date.getMonth() + 1 - playerDOBMonth;
    if (m < 0 || (m === 0 && date.getDate() < playerDOBDate)) {
      age--;
    }
    return age;
  }
}
