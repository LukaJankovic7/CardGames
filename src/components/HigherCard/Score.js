import React from 'react';
import { connect } from 'react-redux';

const Score = props => {
    const lastScore = localStorage.getItem('LAST_SCORE').split(",");
    return (
        <div>
            {lastScore ? (
                <div>
                    <h2>Last score:</h2>
                    <h3 style={{display: 'inline-block', margin: 10}}>{lastScore[0]}</h3>
                    <h3 style={{display: 'inline-block', margin: 10}}>{lastScore[1]}</h3>
                </div>
            ) : (null)}
            
            <h2>Current score:</h2>
            <h3 style={{display: 'inline-block', margin: 10}}>{props.score[0]}</h3>
            <h3 style={{display: 'inline-block', margin: 10}}>{props.score[1]}</h3>
        </div>
    )
}

export default connect(
    store => ({score: store.higherCard.score})
)(Score)