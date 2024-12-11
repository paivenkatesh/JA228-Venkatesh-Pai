export enum Role{
    Batsman = 'Batsman',
    Bowler = 'Bowler',
    Keeper = 'WicketKeeper',
    AllRounder = 'AllRounder'
}

export interface Player{
    playerId: number;
    playerName: string;
    jerseyNumber: number;
    role: Role;
    totalMatches: number;
    teamName: string;
    country: string;
    description: string;
  
}