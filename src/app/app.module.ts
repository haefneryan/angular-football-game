import { FetchDataService } from './../../../angular-football-tables/src/app/fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { BoardComponent } from './board/board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameResultModalComponent } from './game-result-modal/game-result-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import { MenuModalComponent } from './menu-modal/menu-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerSelectComponent,
    BoardComponent,
    GameResultModalComponent,
    MenuComponent,
    MenuModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
