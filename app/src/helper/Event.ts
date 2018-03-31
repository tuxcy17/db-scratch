class Event {
    static allEvents: Event[] = [];
    public static readonly EVT_ADD_TRIGGER: Event = new Event("EVT_ADD_TRIGGER");
    public static readonly EVT_DEL_TRIGGER: Event = new Event("EVT_DEL_TRIGGER");

    private name: string;

    constructor (name: string) {
        this.name = name;
        Event.allEvents.push(this);
    }

    public getName(): string {
        return this.name;
    }

    public static getAllEvents(): Array<Event> {
        return Event.allEvents;
    }

}

export {Event}
