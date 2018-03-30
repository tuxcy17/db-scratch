import * as React from "react";
import {Trigger} from '../models/Trigger';

class TriggerList extends React.Component<any, any> {
    state: any = {
        triggers: []
    };

    constructor(props: any) {
        super(props);
        this.state = {
            triggers: []
        };
    }

    public add () {
        let trigger = new Trigger("Trigger1", "Hello world !");
        this.state.triggers.push(trigger);
        alert('add');
    }

    public remove (triggerToDelete: any) {
        alert('delete')
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.add}>
                        add
                    </button>
                </div>
                <div>
                    <ul>

                    </ul>
                </div>
            </div>
        );
    }
}

export {TriggerList};