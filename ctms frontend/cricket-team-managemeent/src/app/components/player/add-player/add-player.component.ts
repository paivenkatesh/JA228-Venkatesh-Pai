import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  addPlayerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private router: Router
  ) {
    this.addPlayerForm = this.fb.group({
      playerName: ['', Validators.required],
      jerseyNumber: [null, [Validators.required, Validators.min(0)]],
      role: ['', Validators.required],
      totalMatches: [null, [Validators.required, Validators.min(0)]],
      teamName: ['', Validators.required],
      country: ['', Validators.required],
      description: ['']
    });

  }

  onSubmit(): void {
    if (this.addPlayerForm.valid) {
      this.playerService.addPlayer(this.addPlayerForm.value).subscribe({
        next: () => {
          alert('Player added successfully');
          this.router.navigate(['/list-players']);
        },
        error: (err) => {
          console.error('Error adding player:', err);
        }
      });
    } else {
      alert('Please fill in all required fields');
    }
  }

}
