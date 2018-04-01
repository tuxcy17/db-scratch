class Event {
    static allEvents: Event[] = [];
    public static readonly EVT_ADD_TRIGGER: Event = new Event("EVT_ADD_TRIGGER");
    public static readonly EVT_UPD_TRIGGER: Event = new Event("EVT_UPD_TRIGGER");
    public static readonly EVT_DEL_TRIGGER: Event = new Event("EVT_DEL_TRIGGER");
    public static readonly EVT_SEL_TRIGGER: Event = new Event("EVT_SEL_TRIGGER");


    public static readonly EVT_ADD_DATABASE: Event = new Event("EVT_ADD_DATABASE");
    public static readonly EVT_UPD_DATABASE: Event = new Event("EVT_UPD_DATABASE");
    public static readonly EVT_DEL_DATABASE: Event = new Event("EVT_DEL_DATABASE");
    public static readonly EVT_SEL_DATABASE: Event = new Event("EVT_SEL_DATABASE");


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
