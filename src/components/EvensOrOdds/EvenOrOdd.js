import React from 'react';
import { connect } from 'react-redux';
import { cardGuessEven, cardGuessOdd} from '../../actions/cardGuess';

const EvenOrOdd = props => {

    return (
        <div>
            <button 
                onClick={props.cardGuessEven} 
                style= { props.choice === 'even' ? {border: '2px solid #43a047'} : null }
            >Even</button>
            {'  '}  {/* manual spacing */}
            <button 
                onClick={props.cardGuessOdd} 
                style= { props.choice === 'odd' ? {border: '2px solid #43a047'} : null }
            >Odd</button>
        </div>
    )
}

export default connect(
    store => ({
        value: store.deck.value,
        choice: store.cardGuess.cardGuess
    }),
    { cardGuessEven, cardGuessOdd}
)(EvenOrOdd);