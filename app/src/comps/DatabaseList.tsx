import * as React from 'react';
import '../styles/App.css';
import {Database} from '../models/Database';
import {eventService} from '../services/EventService';
import {Event} from '../helper/Event';

class DatabaseList extends React.Component<any, any> {
    state = {
      databases: []
    };

    constructor (props: any) {
        super(props);
        this.state = {
            databases: []
        };
        this.addDatabase = this.addDatabase.bind(this);
        this.removeDatabase = this.removeDatabase.bind(this);
        this.selectDatabase = this.selectDatabase.bind(this);
    }

    public addDatabase() {
        let newDb: Database = new Database("New Db");
        let databases: Database[] = this.state.databases.concat([newDb]);
        this.setState({databases: databases});
        eventService.notifyImmediate(newDb, [Event.EVT_ADD_DATABASE]);
    }
    public removeDatabase(db: Database) {
        alert('addDb');
    }
    public selectDatabase(db: Database) {
        eventService.notifyImmediate(db, [Event.EVT_SEL_TRIGGER]);
    }

    render() {
        const listDb = this.state.databases.map((db: Database) =>
            <li key={db.id}>
                <a onClick={() => {this.selectDatabase(db)} } className="">
                    {db.name}
                </a>
                <button onClick={() => {this.removeDatabase(db)} } className="">
                    <i className="fas fa-times"/>
                </button>
            </li>
        );

        return (
            <div>

                <ul>
                    <li>
                        <button className="button" onClick={this.addDatabase}>
                            add
                        </button>
                    </li>
                    {listDb}
                </ul>
            </div>
        );

    }
}

export {DatabaseList};