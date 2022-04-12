import { PlayerInfo } from './../player-info.model';
import { GuessService } from './../guess.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css'],
})
export class PlayerSelectComponent implements OnInit {
  @Input() playersArray: PlayerInfo[] = [];
  form!: FormGroup;
  guesses: any[] = [];
  winner!: boolean;
  testArray = ['test', 'tes', 'te', 't'];
  control = new FormControl();
  @Input() filteredPlayersArray: PlayerInfo[] = [];

  constructor(private guessService: GuessService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      selectedPlayer: ['', [Validators.required]],
    });
    this.guessService.winner$.subscribe((res) => {
      console.log(res);
      this.winner = res;
    });
    this.form.get('selectedPlayer')?.valueChanges.subscribe((res) => {
      this._filter(res);
    });
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredPlayersArray = this.playersArray.filter((player) => {
      return player.name.toLowerCase().includes(filterValue);
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('form invalid');
    } else {
      let index = this.playersArray.findIndex(
        (x) => x.name === this.form.value.selectedPlayer.name
      );

      if (this.guesses.length <= 4) {
        this.guessService.onSubmit(this.playersArray[index]);
        this.guessService.sendGuesses();
        this.playersArray.splice(this.form.value.selectedPlayer, 1);
        this.guesses = this.guessService.guesses;
      }
    }
    this.form.untouched;
    this.form.reset({ selectedPlayer: '' });
  }

  displayFunction(subject: any) {
    return subject ? subject.name : undefined;
  }
}
