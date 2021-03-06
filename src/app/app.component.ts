import { FetchAllPlayersService } from './fetch-all-players.service';
import { PlayerInfo } from './player-info.model';
import { GuessService } from './guess.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  playersArray: PlayerInfo[] = [];
  winner: boolean = false;
  loser: boolean = false;
  showModal: boolean = false;
  guesses: any[] = [];
  answer!: PlayerInfo;
  menuModal: boolean = false;
  menuModalType!: string;
  url: string =
    'https://football-game-75856-default-rtdb.firebaseio.com/data.json';

  constructor(
    private guessService: GuessService,
    private fetchAllPlayersService: FetchAllPlayersService
  ) {}

  ngOnInit(): void {
    this.fetchAllPlayersService.getPlayers().subscribe((res) => {
      this.data = res;
      this.data.forEach((element: any, parentIndex: number) => {
        element.squad.forEach((player: any, index: number) => {
          this.data[parentIndex].squad[index].club = element.name;
          this.data[parentIndex].squad[index].crest = element.crestUrl;
        });
      });
      this.data.forEach((element: any) => {
        this.playersArray.push(...element.squad);
      });
      const randomNumber = Math.floor(
        Math.random() * (this.playersArray.length - 1)
      );
      this.answer = this.playersArray[randomNumber];
      this.answer.age = this.guessService.getAge(this.answer.dateOfBirth);
      this.guessService.setAnswer(this.answer);
    });
    this.guessService.winner$.subscribe((res) => {
      this.winner = res;
      if (res === true) {
        this.showModal = true;
      }
    });
    this.guessService.loser$.subscribe((res) => {
      this.loser = res;
      if (res === true) {
        this.showModal = true;
      }
    });
    this.guessService.guesses$.subscribe((res) => {
      this.guesses = res;
    });
  }

  toggleMenuModal(message?: string) {
    if (message) {
      this.menuModalType = message;
    }
    this.menuModal = !this.menuModal;
  }
}
