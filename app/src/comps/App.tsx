import * as React from 'react';
import '../styles/App.css';
import {TriggerList} from './TriggerList';
import {TriggerEdition} from './TriggerEdition';
import {ActionList} from './ActionList';

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">DB scratch</h1>
                </header>
                <TriggerEdition defaultValue="TEST DEFAULT"/>
                <TriggerList/>
                <ActionList />
            </div>
        );
    }
}

export {App};
