import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit{
  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  //Load all players
  loadPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (players) => {
        this.players = players;
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }

  //Delete a player
  deletePlayer(playerId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this player?');
    if (confirmDelete) {
      this.playerService.deletePlayer(playerId).subscribe({
        next: () => {
          alert('Player deleted successfully');
          this.loadPlayers(); // Reload the player list after deletion
        },
        error: (err) => {
          console.error('Error deleting player:', err);
        },
      });
    }

  }

}
