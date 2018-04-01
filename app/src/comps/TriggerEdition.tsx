import * as React from 'react';
import {Trigger} from '../models/Trigger';
import {copy} from '../helper/Helper';
import {eventService, IObserver} from '../services/EventService';
import {Event} from '../helper/Event';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class TriggerEdition extends React.Component<any, any> implements IObserver {
    state: any = {
        trigger: null,
        feedback: null
    };

    constructor(props: any) {
        super(props);
        this.state.trigger = new Trigger('trigger1', 'DESCRIPTION');

        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.run = this.run.bind(this);
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
        eventService.attach(this, Event.EVT_ADD_TRIGGER);
        eventService.attach(this, Event.EVT_SEL_TRIGGER);
    }

    public update(events: Array<Event>, value: any): any {
        this.setState({trigger: value, feedback: ''});
    }



    public clear() {
        let trigger: Trigger = copy(this.state.trigger);
        trigger.text = '';
        this.setState({trigger: trigger});
    }

    public run() {
        alert('run: ' + this.state.trigger.text);
        this.setState({feedback: 'something'});
    }

    public save() {
        let trigger: Trigger = this.state.trigger;
        eventService.notifyImmediate(trigger, [Event.EVT_UPD_TRIGGER]);
        alert('save');
    };

    public onDescriptionChange(newValue) {
        debugger;
        let trigger: Trigger = this.state.trigger;
        trigger.text = newValue;
        this.setState({trigger: trigger});
    }

    public onNameChange(event: any) {
        let trigger: Trigger = this.state.trigger;
        trigger.name = event.target.value;
        this.setState({trigger: trigger});
    }

    render() {
        return (
            <div className="editor">
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.trigger.name} onChange={this.onNameChange}/>
                    <div>
                        <button className="button" onClick={this.clear}>
                            clear
                        </button>
                        <button className="button" onClick={this.run}>
                            run
                        </button>
                        <button className="button" onClick={this.save}>
                            save
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <AceEditor
                            mode="java"
                            theme="github"
                            onChange={this.onDescriptionChange}
                            name={this.state.trigger.id}
                            editorProps={{$blockScrolling: true}}
                        />
                        {/*<textarea className="u-full-width" value={this.state.trigger.text}*/}
                                  {/*onChange={this.onDescriptionChange}/>*/}
                        <span>Feedback: {this.state.feedback}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export {TriggerEdition};