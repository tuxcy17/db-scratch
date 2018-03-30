import {v4} from 'uuid';

class Trigger {
    id: string;
    name: string;
    text: string;

    constructor (name: string, text: string) {
        this.id = v4();
        this.name = name;
        this.text = text;
    }
}

export {Trigger}