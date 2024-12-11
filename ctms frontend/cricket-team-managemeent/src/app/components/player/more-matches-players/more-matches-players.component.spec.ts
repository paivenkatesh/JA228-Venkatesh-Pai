import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMatchesPlayersComponent } from './more-matches-players.component';

describe('MoreMatchesPlayersComponent', () => {
  let component: MoreMatchesPlayersComponent;
  let fixture: ComponentFixture<MoreMatchesPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreMatchesPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreMatchesPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
