import { combineReducers } from 'redux';
import settingsReducer from './settings.js';
import deckReducer from './deck.js';
import cardGuessReducer from './cardGuess';
import higherCardReducer from './higherCard';

export default combineReducers({
    settings: settingsReducer,
    deck: deckReducer,
    cardGuess: cardGuessReducer ,
    higherCard: higherCardReducer              //mapping deck keyword for deckReducer  
});
