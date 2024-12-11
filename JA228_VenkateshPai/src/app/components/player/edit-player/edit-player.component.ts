import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm: FormGroup;
  playerId!: number;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router

   ){
    this.editPlayerForm = this.fb.group({
      playerName: ['', Validators.required],
      jerseyNumber: [null, [Validators.required, Validators.min(0)]],
      role: ['', Validators.required],
      totalMatches: [null, [Validators.required, Validators.min(0)]],
      teamName: ['', Validators.required],
      country: ['', Validators.required],
      description: ['']
    });
   }

   ngOnInit(): void {
    this.playerId = +this.route.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(this.playerId).subscribe({
      next: (data) => {
        this.editPlayerForm.patchValue(data);
      },
      error: (err) => {
        console.error('Error loading player:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.editPlayerForm.valid) {
      this.playerService.updatePlayer(this.playerId, this.editPlayerForm.value).subscribe({
        next: () => {
          alert('Player updated successfully');
          this.router.navigate(['/list-players']);
        },
        error: (err) => {
          console.error('Error updating player:', err);
        }
      });
    } else {
      alert('Please fill in all required fields');
    }
  }
}
