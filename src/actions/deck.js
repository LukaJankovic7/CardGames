import { DECK } from './types';

export const fetchDeckSuccess = fetchJson => {
    const { remaining, deck_id } = fetchJson;
    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message}
}

export const fetchNewDeck = () => dispatch => { //double arrow syntax (returns reference to the function)
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then (response => {
                if(response.status !=200) {
                    throw new Error('Unsuccessfull request to deckofcardsapi.com')
                }    

                return response.json()}
            
            )
        .then (json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)));
}

const drawCardSuccess = (json) => {
    return { type: DECK.DRAW_SUCCESS , cards: json.cards[0], remaining: json.remaining }
}

const drawCardError = error => {
    return { type: DECK.DRAW_ERROR, error: error}
}

export const drawCard = (deck_id) => dispatch => {
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then(response => {
            if( response.status !=200) {
                throw new Error ('Unsuccessfull request to draw a card.');
            }

            return response.json()
        })
        .then( json => dispatch(drawCardSuccess(json)))
        .then()
        .catch( error => dispatch(drawCardError(error)))
}