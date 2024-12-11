import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://localhost:8080/ctms/player';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/getAllPlayers`)
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>('${this.apiUrl}/registerPlayer', player);
  }

  updatePlayer(playerId: number, player: Player): Observable<Player> {
    return this.http.put<Player>(
      `${this.apiUrl}/updatePlayerDetails/${playerId}`,
      player
    );
  }

  deletePlayer(playerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePlayer/${playerId}`);
  }

  getPlayerById(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/getPlayerById/${playerId}`);
  }

}
