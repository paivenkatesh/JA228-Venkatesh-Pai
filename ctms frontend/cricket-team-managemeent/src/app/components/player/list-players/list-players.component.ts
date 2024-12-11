import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit{
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  //Load all players
  loadPlayers(): void {
    this.playerService.getPlayers().subscribe({
      next: (data) => {
        this.players = data;
      },
      error: (err) => {
        console.error('Error fetching players:', err);
      },
    });
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
