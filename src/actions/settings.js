import {SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED} from './types.js';

export const startGame = () => {
    return {gameStarted: true, type: SET_GAME_STARTED};
}

export const cancelGame = () => {
    return {gameStarted: false, type: SET_GAME_STARTED}
}

export const expandInstructions = () => {
    return {instructionsExpanded: true, type: SET_INSTRUCTIONS_EXPANDED}
} 

export const collapseInstructions = () => {
    return {instructionsExpanded: false, type: SET_INSTRUCTIONS_EXPANDED}
}