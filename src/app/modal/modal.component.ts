import { PlayerInfo } from './../player-info.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
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
