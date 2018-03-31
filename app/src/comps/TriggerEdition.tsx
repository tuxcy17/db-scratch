import * as React from 'react';
import {Trigger} from '../models/Trigger';
import {copy} from '../helper/Helper';
import {eventService, IObserver} from '../services/EventService';
import {Event} from '../helper/Event';

class TriggerEdition extends React.Component<any, any> implements IObserver {
    state: any = {
        trigger: null,
        feedback: null
    };

    constructor(props: any) {
        super(props);
        this.state.trigger = new Trigger('trigger1', 'DESCRIPTION');

        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.run = this.run.bind(this);
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
        eventService.attach(this, Event.EVT_ADD_TRIGGER);
    }

    public update(events: Array<Event>, value: any): any {
        this.setState({trigger: value});
        // return JSON.parse(JSON.stringify(this.states));
    }


    public clear() {
        let trigger: Trigger = copy(this.state.trigger);
        trigger.text = "";
        this.setState({trigger: trigger});
    }

    public run() {
        alert("run: " + this.state.trigger.text);
        this.setState({feedback: "something"});
    }

    public save() {
        alert('save');
    };

    public onDescriptionChange(event: any) {
        let trigger: Trigger = copy(this.state.trigger);
        trigger.text = event.target.value;
        this.setState({trigger: trigger});
    }

    render() {
        return (
            <div>
                <div>{this.state.trigger.name}</div>
                <div>
                <textarea value={this.state.trigger.text} onChange={this.onDescriptionChange}>

                </textarea>
                    <span>Feedback: {this.state.feedback}</span>
                </div>
                <div>
                    <button onClick={this.clear}>
                        clear
                    </button>
                    <button onClick={this.run}>
                        run
                    </button>
                    <button onClick={this.save}>
                        save
                    </button>
                </div>
            </div>
        );
    }
}

export {TriggerEdition};