import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreReducer from '../scorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
    scoreInformation: scoreReducer,
});

export default rootReducer;