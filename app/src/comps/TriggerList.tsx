import * as React from "react";

class TriggerList extends React.Component {
    public add () {
        alert('add');
    }

    public remove () {
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