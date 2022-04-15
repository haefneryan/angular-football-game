import { PlayerInfo } from './../player-info.model';
import { FetchAllPlayersService } from './../fetch-all-players.service';
import { GuessService } from './../guess.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as Continents from '../continents';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  guesses: any[] = [];
  answer!: PlayerInfo;
  guessesSub!: Subscription;
  @Input() winner!: boolean;
  @Input() loser!: boolean;

  constructor(private guessService: GuessService) {}

  ngOnInit() {
    this.guesses = this.guessService.guesses;
    this.guessService.answer$.subscribe((res) => {
      console.log(res);
      this.answer = res;
    });
    this.guessService.guesses$.subscribe((res) => {
      this.guesses = res;
    });
  }

  checkContinent(input: string) {
    if (Continents.Europe.includes(input)) {
      return 'Europe';
    } else if (Continents.Africa.includes(input)) {
      return 'Africa';
    } else if (Continents.SouthAmerica.includes(input)) {
      return 'South America';
    } else if (Continents.NorthAmerica.includes(input)) {
      return 'North America';
    } else if (Continents.Asia.includes(input)) {
      return 'Asia';
    } else if (Continents.Australia.includes(input)) {
      return 'Australia';
    } else {
      return null;
    }
  }
}
