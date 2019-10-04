import React from 'react';
import { connect } from 'react-redux';
import { generateCard } from '../../actions/higherCard';


const GenerateCards = props => {
    return(
        <div>
            <button onClick={props.generateCard}>New numbers</button>
        </div>
    )
}

export default connect(
    () => ( {} ),
    { generateCard }
)(GenerateCards);