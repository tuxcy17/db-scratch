import * as React from "react";
import {Trigger} from '../models/Trigger';
import {eventService} from '../services/EventService';
import {Event} from '../helper/Event';

class TriggerList extends React.Component<any, any> {
    state: any = {
        triggers: []
    };

    constructor(props: any) {
        super(props);
        this.state = {
            triggers: []
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    private getNextTriggerName(): string {
        return "Trigger" + (this.state.triggers.length + 1)
    }

    public add () {
        let newTrigger = new Trigger(this.getNextTriggerName(), "Hello world !");
        let triggers: Trigger[] = this.state.triggers.concat([newTrigger]);
        this.setState({triggers: triggers});
    }

    public remove (triggerToDelete: any) {
        alert('delete')
    }

    public selectTrigger(trigger: Trigger) {
        eventService.notifyImmediate(trigger, [Event.EVT_ADD_TRIGGER]);
    }

    render() {
        const listTrigger = this.state.triggers.map((trigger: Trigger) =>
            <li key={trigger.id}>
                <a onClick={() => {this.selectTrigger(trigger)} }>
                    {trigger.name}
                </a>
            </li>
        );

        return (
            <div>
                <div>
                    <button onClick={this.add}>
                        add
                    </button>
                </div>
                <div>
                    <ul>
                        {listTrigger}
                    </ul>
                </div>
            </div>
        );
    }
}

export {TriggerList};