import React from 'react';
import {connect} from 'react-redux';

const Cards = props => {
    return (
        <div>
            {
                props.isDrawn ? (
                    <div style={{margin:10}}>
                        <h3>{props.cards.value} OF {props.cards.suit}</h3>
                        <img src={props.cards.image} alt='CardImage'></img>
                    </div>
                ) : null
            }
        </div>
    )
}

export default connect(
    store => ({
        cards: store.deck.cards, isDrawn: store.settings.cardDrawn
    })
)(Cards)