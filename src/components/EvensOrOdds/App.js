import React, {Component} from 'react';
import {startGame} from '../../actions/settings';
import {cancelGame} from '../../actions/settings';
import {fetchNewDeck} from '../../actions/deck';
import fetchStates from '../../reducers/fetchStates';
import {connect} from 'react-redux';
import OverallHeader from '../OverallHeader';
import Instructions from './Instructions.js';
import DrawCard from './DrawCard';
import Cards from './Cards';
import EvenOrOdd from './EvenOrOdd';
import GameState from './GameState';

class App extends Component {

    startGame = () => {
        this.props.startGame();

        this.props.fetchNewDeck();
    }

    render() {
        if(this.props.fetchState === fetchStates.error) {
            return (
                <div>
                    <p>An error has ocurred! Please try reloading the app... </p>
                    <p>{this.props.message}</p>
                </div>
            )
        }

        return(
            <div>
                <OverallHeader />
                <hr/>
                <h2>Evens or Odds</h2>
                {
                    
                    
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <GameState />
                            <br />
                            <EvenOrOdd />
                            <br />
                            <DrawCard />
                            <Cards />
                            <hr />
                            <button onClick={this.props.cancelGame}>Cancel game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits!</h3>
                            <button onClick={this.startGame}>Start new game</button>
                            <hr/>
                            <Instructions />
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {

    // const {gameStarted} = state.settings;
    // const {fetchState, message} = state.deck

    const {
        settings: {gameStarted},
        deck: {fetchState, message}
    } = state;                              //combined destructuring syntax


    return {gameStarted, fetchState, message};
}


// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => fetchNewDeck(dispatch)
//     }
// }

const componentConnector = connect(
    mapStateToProps, 
    {startGame, cancelGame, fetchNewDeck}    //short-hand syntax
);

export default componentConnector(App);