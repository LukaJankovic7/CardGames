import React , { Component } from 'react'
import OverallHeader from '../OverallHeader';
import Instructions from './Instructions';
import GenerateCards from './GenerateCards';
import Cards from './Cards';
import Score from './Score';

class App extends Component {
    render() {
        return(
            <div>
                <OverallHeader />
                <hr />
                <h2>Higher card</h2>
                <br />
                <Instructions />
                <Score />
                <br /> 
                <GenerateCards />
                <Cards />
            </div>
        )
    }
}

export default App;