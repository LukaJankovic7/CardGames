import {SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED, DECK} from '../actions/types.js';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false,
    cardDrawn: false
}

const settingsReducer = (state=DEFAULT_SETTINGS, action) => {
    switch(action.type) {
        case SET_GAME_STARTED:
            return {
                ...state,
                gameStarted: action.gameStarted, cardDrawn: false
            };

        case SET_INSTRUCTIONS_EXPANDED:
            return {
                ...state,
                instructionsExpanded: action.instructionsExpanded
            };

        case DECK.DRAW_SUCCESS: 
            return {
                ...state, cardDrawn: true
            }
        default: return state;
    }

}


export default settingsReducer;