import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(value: string) {
    this.toggleMenu.emit(value);
  }
}
