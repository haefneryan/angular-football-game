import { PlayerInfo } from './../player-info.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css'],
})
export class MenuModalComponent implements OnInit {
  @Output() toggleModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.toggleModal.emit();
  }
}
