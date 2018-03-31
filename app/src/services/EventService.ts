import * as _ from "underscore";
import {Event} from "../helper/Event";

interface IObserver {
    update(event: Array<Event>, value: any): any;
    // getStates(): {};
    // getState(event: Event): any;
}

class EventProvider {
    private observers: any = {};
    private states: any = {};
    private static instance: EventProvider = null;

    public static getInstance (): EventProvider {
        if (!this.instance) {
            this.instance = new EventProvider();
        }
        return this.instance;
    }

    private constructor () {

    }

    /**
     *
     * @param {IObserver} observer
     * @param {Event} event
     */
    public attach(observer: IObserver, event: Event): void {
        this.observers[event.getName()] ?
            this.observers[event.getName()].push(observer) :
            this.observers[event.getName()] = [observer];

        if (!this.states[event.getName()]) {
            this.states[event.getName()] = {};
        }
    }

    // public detach(observer: IObserver, event: Event): void {
    //     let index: number;
    //
    //     if (! this.observers[event.getName()]) {
    //         return
    //     }
    //
    //     _.each(this.observers[event.getName()], (o, i) => {
    //         if (o === observer) {
    //             index = i;
    //         }
    //     });
    //
    //     if (index != null) {
    //         this.observers[event.getName()].splice(index, 1);
    //     }
    // }

    /**
     *
     * @returns {Array<any>}
     */
    public getObservers(): Array<IObserver> {
        const res = [];

        _.each(this.observers, function (arr: any, i) {
            _.each(arr, function (o) {
                res.push(o);
            });
        });

        return res;
    }

    /**
     *
     * @param {Event} event
     * @returns {Array<any>}
     */
    public getObserversStateByEvent(events: Array<Event>): Array<any> {
        const res = [];
        const obs = _.map(events, (event) => {
            return this.observers[event.getName()];
        });

        _.each(_.uniq(_.flatten(obs)), function (o) {
            res.push(o);
        });

        return res;
    }

    public notifyObservers(events: Array<Event>, value: any): Array<any> {
        const res = [];
        const arr = _.map(events, (event) => {
            return this.observers[event.getName()];
        });

        _.each(_.uniq(arr), (obs) => {
            _.each(obs, (o: IObserver) => {
                res.push(o.update(events, value));
            });
        });

        return res;
    }

    public notifyImmediate(value: any, events: Array<Event>): Array<any> {
        this.setSubjectStateByEvents(value, events);
        return this.notifyObservers(events, value);
    }


    /**
     *
     * @returns {Map<string, any>}
     */
    public getSubjectState(): {} {
        return this.states;
    }

    /**
     *
     * @param {Event} event
     * @returns {Map<string, any>}
     */
    public getSubjectStateByEvent(event: Event): {} {
        return this.states[event.getName()];
    }


    /**
     *
     * @param value
     * @returns {any}
     */
    public setSubjectState(value: any): any {
        _.each(this.states, (el, i) => {
            this.states[i] = value;
        });
        return value;
    }

    /**
     *
     * @param value
     * @param {Array<Event>} events
     * @returns {any}
     */
    public setSubjectStateByEvents(value: any, events: Array<Event>): any {
        _.each(events, (event) => {
            this.states[event.getName()] = value;
        });
        return value;
    }

    /**
     *
     */
    public flushSubjectState(): void {
        this.states = {};
    }

    /**
     *
     * @param {Array<Event>} events
     */
    public flushSubjectStateByEvent(events: Array<Event>): void {
        _.each(events, (event) => {
            this.states[event.getName()] = {};
        });
    }
}

const eventService: EventProvider = EventProvider.getInstance();

export {EventProvider, IObserver, eventService}
