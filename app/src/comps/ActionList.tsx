import * as React from "react";

class ActionList extends React.Component<any, any> {
    state: any = {
        actions: [

        ]
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>

                </ul>
            </div>
        );
    }
}

export {ActionList};