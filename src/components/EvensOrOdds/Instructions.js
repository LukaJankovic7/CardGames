import React from 'react';
import {connect} from 'react-redux';
import {expandInstructions} from '../../actions/settings';
import {collapseInstructions} from '../../actions/settings';

const Instructions = props => {
    const {instructionsExpanded, expandInstructions, collapseInstructions} = props;

    return(
        instructionsExpanded ? (
            <div>
                <p>Instructions: </p>
                <p>Guess if the card is even or odd!</p>
                <p>Click on the responding buttons to make your guess</p>
                <p>Click on the next card to draw and see if you are Right!</p>
                <p>Each right guess earns you a point!!!</p>
                <button onClick = {collapseInstructions}>Show less</button>
            </div>
        ) : (
            <div>
                <p>Instructions: </p>
                <p>Guess if the next card is even or odd!</p>
                <button onClick = {expandInstructions}>Show more</button>
            </div>
        )
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         expandInstructions: () => dispatch(expandInstructions()),
//         collapseInstructions: () => dispatch(collapseInstructions())
//     }
// }

// const mapStateToProps = state => {
//     return {instructionsExpanded: state.instructionsExpanded}
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps); can be inlined

export default connect(
    state => ({instructionsExpanded: state.settings.instructionsExpanded}), 
    {expandInstructions, collapseInstructions} // react-redux automatically does the binding of dispatch methods (short-hand syntax)
)(Instructions); //connect returns a function!!