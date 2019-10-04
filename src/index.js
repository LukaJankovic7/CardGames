import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AppEvensOrOdds from './components/EvensOrOdds/App';
import AppHigherCard from './components/HigherCard/App';
import OverallHeader from './components/OverallHeader';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe( () => console.log('state', store.getState()) );

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route 
                exact path='/'
                render= { () => 
                    (<OverallHeader />)
                }
            />
            <Route 
                path='/evens-or-odds' 
                render={() => 
                    (<Provider store={ store }>
                        <AppEvensOrOdds />
                    </Provider>)
                }
            />
            <Route 
                path='/higher-card' 
                render={ ()=> 
                    (<Provider store={store}>
                        <AppHigherCard />
                    </Provider>)
                }
            />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

