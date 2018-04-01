import * as React from "react";
import {Action, basicActions} from '../models/Action';

class ActionList extends React.Component<any, any> {

    state: any = {
        actions: basicActions
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        const listActions = this.state.actions.map((action: Action, index: number) =>
            <li key={index}>
                <button onClick={action.fn}>
                    {action.name}
                </button>
            </li>
        );

        return (
            <div>
                <ul>
                    {listActions}
                </ul>
            </div>
        );
    }
}

export {ActionList};