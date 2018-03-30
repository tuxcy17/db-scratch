import * as React from 'react';
import './styles/App.css';
import {TriggerList} from './TriggerList';
import {TriggerEdition} from './TriggerEdition';

const logo = require('./styles/logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <TriggerEdition/>
                <TriggerList/>
            </div>
        );
    }
}

export {App};
