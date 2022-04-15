import { PlayerInfo } from '../player-info.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-result-modal',
  templateUrl: './game-result-modal.component.html',
  styleUrls: ['./game-result-modal.component.css'],
})
export class GameResultModalComponent implements OnInit {
  @Output() public clear = new EventEmitter();
  @Input() message!: boolean;
  @Input() answer!: PlayerInfo;
  @Input() guesses!: PlayerInfo[];

  constructor() {}

  ngOnInit(): void {}

  clearModal() {
    this.clear.emit();
  }
}
