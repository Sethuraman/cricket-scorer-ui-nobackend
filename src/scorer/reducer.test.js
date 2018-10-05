import reducer from './reducer';
import {initialState as gameState} from "../newGame/reducer";

describe('gameInformation/reducer', () => {
  it('should return initial state of scores of each team', () => {
    const initialState = {
        team1:
            {
                wickets: 0,
                overs: 0,
                score: 0
            },
        team2: {
            wickets: 0,
            overs: 0,
            score: 0
        },
        currentlyBattingTeamName: gameState.team1.name
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});