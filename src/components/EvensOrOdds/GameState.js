import React from 'react';
import {connect} from 'react-redux';

const SCORE_RECORD_KEY = 'SCORE_RECORD_KEY';

const GameState = props => {

    const checkNewRecord = currentScore => {
        const record = Number(localStorage.getItem(SCORE_RECORD_KEY));

        if ( currentScore > record ) {
            localStorage.setItem(SCORE_RECORD_KEY, currentScore);
            return { record: currentScore, isNewScore: true }
        }

        return { record, isNewScore: false}

    }

    const { record, isNewScore } = checkNewRecord(props.score);
    const RecordText = isNewScore ? 'Your new record' : 'Your record';

    return (
        <div>
            <h4>{RecordText}: {record}</h4>
            <h4>Cards remaining: {props.remaining}</h4>
            <h4>Your current score: {props.score}</h4>
        </div>
    )
}

export default connect(
    ({
        deck: {remaining},
        cardGuess: {score} 
    }) => ({score: score, remaining: remaining})
)(GameState);