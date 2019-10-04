import { SET_GUESS } from './types';

export const cardGuessEven = () => {
    return{ type: 'SET_GUESS', guess: 'even' }
}

export const cardGuessOdd = () => {
    return { type: 'SET_GUESS', guess: 'odd' }
}

export const addPoints = () => {
    return { type: 'POINTS_INCREMENT' }
}