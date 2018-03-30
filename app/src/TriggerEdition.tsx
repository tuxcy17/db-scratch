import * as React from "react";

class TriggerEdition extends React.Component {

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
                    Test
                </textarea>
                <span>Feedback</span>
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