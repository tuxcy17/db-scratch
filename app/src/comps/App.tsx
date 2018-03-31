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
                <div className="container">
                    <div className="row">
                        <div className="eight columns">
                            <h2>Trigger editor</h2>
                            <div>
                                <TriggerEdition/>
                            </div>
                            <div>
                                <ActionList />
                            </div>
                        </div>
                        <div className="four columns">
                            <h2>Triggers list</h2>
                            <TriggerList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {App};
