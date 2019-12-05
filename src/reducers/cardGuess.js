import { SET_GUESS, SET_GAME_STARTED, DECK } from '../actions/types';

const DEFAULT_GAME_STATE = {
    cardGuess: 'even',
    score: 0
}

export const cardGuessReducer = (state=DEFAULT_GAME_STATE, action) => {
    const EVENS = [ '2', '4', '6', '8', '10' ];
    const ODDS = [ 'ACE', '3', '5', '7', '9'];

    switch(action.type) {
        case SET_GUESS: 
            return {...state, cardGuess: action.guess};
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
        case DECK.DRAW_SUCCESS: 
            const {value} = action.cards;
            const { cardGuess, score } = state;

            if (
                ( cardGuess === 'even' && EVENS.includes(value)) || 
                ( cardGuess === 'odd' && ODDS.includes(value))
                ) {
                    return {...state, score: score+1};
            }

            return state;
        default: 
            return state
    }
}

export default cardGuessReducer;