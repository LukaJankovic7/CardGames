import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../../actions/higherCard';

const Cards = props => {
    const { value1, value2 } = props;
    const NUMBERS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let backgroundColor = [];
    if(value1>value2) backgroundColor=['#81ff41', '#f91c1c'];
    else if(value1==value2) backgroundColor=['#34fff0', '#34fff0'];
    else backgroundColor = ['#f91c1c', '#81ff41'];

    return (
        <div>
            <div>
                <h2 
                    style={{
                        display: 'inline-block',
                        marginLeft: 10,
                        marginRight: 10,
                        width: 70,
                        backgroundImage: `linear-gradient(to right, ${backgroundColor[0]}, white)`
                    }}
                >{NUMBERS[value1-1]}</h2>
                <h2 
                    style={{
                        display: 'inline-block',
                        marginLeft: 10,
                        marginRight: 10,
                        width: 70,
                        backgroundImage: `linear-gradient(to left, ${backgroundColor[1]}, white) `           
                    }}
                >{NUMBERS[value2-1]}</h2>
            </div>
            
            <button onClick={props.resetGame}>RESET</button>
        </div>
    )
}

export default connect(
    ({ higherCard: {value1, value2} }) => ({ value1: value1, value2: value2 }),
    {resetGame}
)(Cards);