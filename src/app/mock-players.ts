import { Player } from './player';

export const PLAYERS: Player[] = [
    {
        id: 1,
        name: 'Patrick Mahomes',
        experience: 3,
        team: 'KC',
        position: 'QB',
        teamNumber: 15,
        overallRecord: '24-7-0',
        stats: {
          season: 2019,
          gamesStarted: 31,
          gamesPlayed: 31,
          passingStats: {
            completions: 724,
            passesAttempted: 1099,
            completionPercentage: 65.9,
            yards: 9412,
            touchdowns: 76,
            interceptions: 18,
            touchdownInterceptionRatio: 4.22,
            yardsPerAttempt: 8.6,
            sacksTaken: 45
          },
          rushingStats: {
            rushesAttempted: 110,
            yards: 500,
            firstDowns: 34,
            touchdowns: 4,
            yardsPerAttempt: 4.5,
            yardsPerGame: 16.1,
            attemptsPerGame: 3.5
          },
          receivingStats: {
            targets: 0,
            receptions: 0,
            yards: 0,
            firstDowns: 0,
            touchdowns: 0,
            yardsPerReception: 0,
            yardsPerGame: 0,
            receptionsPerGame: 0
          }
        }
      }
]