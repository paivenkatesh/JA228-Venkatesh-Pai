import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPlayersComponent } from './components/player/list-players/list-players.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { EditPlayerComponent } from './components/player/edit-player/edit-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreMatchesPlayersComponent } from './components/player/more-matches-players/more-matches-players.component';
@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    MoreMatchesPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
