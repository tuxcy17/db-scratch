import {v4} from 'uuid';

class Database {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = v4();
        this.name = name;
    }
}

export {Database}