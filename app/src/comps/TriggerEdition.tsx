import * as React from "react";

class TriggerEdition extends React.Component<any, any> {
    state = {
        trigger: null
    };

    constructor(props: any) {
        super(props);
    }

    public clear () {
        alert('clear');
    }

    public run () {
        alert('run');
    }

    public save() {
        alert('save');
    };

    render() {
        return (
            <div>
            <div>
                <textarea>

                </textarea>
                <span>Feedback {this.props.defaultValue}</span>
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