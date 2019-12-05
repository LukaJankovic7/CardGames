import {DECK} from '../actions/types.js';
import fetchStates from './fetchStates';

const DEFAULT_DECK = {
    deck_id: '',
    remaining: 0,
    fetchState: '',
    message: '',
    cards:[]
}

const deckReducer = (state=DEFAULT_DECK, action) => {
    let remaining, message, deck_id, cards;
    switch(action.type) {
        case DECK.FETCH_SUCCESS: 
            ({remaining, deck_id } = action);
            return{...state, remaining, deck_id, fetchState: fetchStates.success}

        case DECK.FETCH_ERROR:
            ({message } = action);
            return {...state, message, fetchState: fetchStates.error};

        case DECK.DRAW_SUCCESS:
            ({cards}=action);
            ({remaining} = state);
            return {...state, remaining: remaining-1 , cards };

        case DECK.DRAW_ERROR:
            ({message} =action)
            return {...state, message, fetchState: fetchStates.error};
        
        default: return state;
    }

}


export default deckReducer;