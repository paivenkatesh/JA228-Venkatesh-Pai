import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlayersComponent } from './components/player/list-players/list-players.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { EditPlayerComponent } from './components/player/edit-player/edit-player.component';
import { MoreMatchesPlayersComponent } from './components/player/more-matches-players/more-matches-players.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-players', pathMatch: 'full'},
  { path: 'list-players', component: ListPlayersComponent},
  { path: 'add-player', component: AddPlayerComponent},
  { path: 'edit-player/:id', component: EditPlayerComponent},
  { path: 'more-matches-players', component: MoreMatchesPlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
