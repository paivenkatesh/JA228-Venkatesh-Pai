import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-more-matches-players',
  templateUrl: './more-matches-players.component.html',
  styleUrls: ['./more-matches-players.component.css']
})
export class MoreMatchesPlayersComponent implements OnInit {
  moreMatchesPlayersForm: FormGroup;
  players: Player[] = [];

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService
  ) {
    this.moreMatchesPlayersForm = this.fb.group({
      playerName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.moreMatchesPlayersForm.valid) {
      const playerName = this.moreMatchesPlayersForm.value.playerName;
      console.log('Player Name:', playerName); // Debugging: Log the player name

      this.playerService.findPlayerWithMoreMatches(playerName).subscribe({
        next: (players) => {
          this.players = players;
        },
        error: (err) => {
          console.error('Error fetching players:', err);
          alert('Error fetching players: ' + err.message);
        }
      });
    } else {
      alert('Please fill in all required fields');
      console.log('Form Errors:', this.moreMatchesPlayersForm.errors); // Debugging: Log form errors
    }
  }
}