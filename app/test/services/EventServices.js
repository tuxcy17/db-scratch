// import * as _ from 'underscore';
// import * as moment from 'moment';
// import {Setup, Teardown, Test, TestCase, TestFixture, Expect, AsyncTest} from 'alsatian';
// import {EventProvider, eventProvider} from "../src/event/EventProvider";
// import {ObserverImpl} from "../src/event/ObserverImpl";
// import {Events} from "../src/event/Events";
//
// @TestFixture('Design Pattern')
// export class DesignPatternTest {
//     now;
//
//     private copy(val: any) {
//         return JSON.parse(JSON.stringify(val));
//     }
//
//     @Setup
//     public setup() {
//         this.now = moment();
//     }
//
//     @Teardown
//     public teardown() {
//         const diff = moment().diff(this.now);
//         console.log(`takes: ${diff}ms.`);
//     }
//
//     // @TestCase([52.50449, 13.39091])
//     // @AsyncTest('#ApiDataService')
//     // public initialTest(bbox: number[]) {
//     //     return dataService.getPlaces(bbox).then(function (res) {
//     //         console.log(res);
//     //     }).catch(function (err) {
//     //         console.log(err);
//     //     });
//     // }
//
//     @TestCase()
//     @Test('#Observer')
//     public observerTest() {
//         const ep: EventProvider = eventProvider;
//         const chatObserver = new ObserverImpl(ep, 'chat');
//         const msgObserver = new ObserverImpl(ep, 'msg');
//
//         ep.attach(chatObserver, Events.EVT_ADD_CHAT);
//         ep.attach(chatObserver, Events.EVT_UPD_CHAT);
//         ep.attach(msgObserver, Events.EVT_ADD_MESG);
//
//         // console.log("initial state is:", ep.getObserversState());
//         ep.setSubjectState('NEW VALUE');
//         ep.setSubjectStateByEvents('CHAT_STATE', [Events.EVT_ADD_CHAT, Events.EVT_UPD_CHAT]);
//
//         ep.getSubjectState();
//         ep.getSubjectStateByEvent(Events.EVT_ADD_CHAT);
//         ep.getSubjectStateByEvent(Events.EVT_UPD_CHAT);
//         ep.getSubjectStateByEvent(Events.EVT_ADD_MESG);
//
//         ep.notifyObservers([Events.EVT_UPD_CHAT, Events.EVT_ADD_MESG]);
//
//         ep.getObservers();
//         ep.getObserversStateByEvent([Events.EVT_UPD_CHAT]);
//
//         ep.notifyImmediate('IMMEDIATE', Events.getAllEvents());
//
//         ep.flushSubjectStateByEvent([Events.EVT_ADD_CHAT, Events.EVT_ADD_MESG]);
//         ep.flushSubjectState();
//
//
//         Expect(['NEW', 'NEW', 'NEW']).toEqual(['NEW', 'NEW', 'NEW']);
//     }
//
// } 
