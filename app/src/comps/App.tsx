import * as React from 'react';
import '../styles/App.css';
import {TriggerList} from './TriggerList';
import {TriggerEdition} from './TriggerEdition';
import {DatabaseList} from './DatabaseList';

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">DB scratch</h1>
                    <DatabaseList />
                </header>
                <div className="container">
                    <div className="row">
                        <div className="eight columns">
                            <div>
                                <TriggerEdition/>
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
