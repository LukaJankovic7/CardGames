import React from 'react';
import { connect } from 'react-redux';
import { drawCard } from '../../actions/deck';

const DrawCard = props => {

    const drawNewCard = () => {
        props.drawCard(props.deck_id);

    }

    return (
        <div>
            {
                props.remaining ? (
                    <button onClick={drawNewCard}>Draw a card!</button>
                ) : (
                    <p>You have run out of cards, please shuffle a new deck!</p>
                )
            }
        </div>
    )
}

export default connect(
    store => ({ deck_id: store.deck.deck_id, remaining: store.deck.remaining, cardGuess: store.cardGuess.cardGuess}),
    { drawCard }
)(DrawCard)