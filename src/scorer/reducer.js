import {initialState as gameState} from '../newGame/reducer'

export const initialState = {
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

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;
