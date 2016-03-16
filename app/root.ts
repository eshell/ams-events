/**
 * Created by erics on 3/15/2016.
 */
import {Component} from 'angular2/core';
import {Events} from "./events/events";
import {EventStore} from "./events/event-store";
import {EventInput} from "./events/event-input";
import {NavBar} from "./events/nav-bar";
import {Footer} from "./events/footer";

@Component({
    selector: 'ams-events',
    template: `
<div class="container">
<ams-navbar></ams-navbar>
<ams-event-input></ams-event-input>
<ams-events-list></ams-events-list>
<ams-footer></ams-footer>
</div>


`,
    directives:[Events,EventInput,NavBar,Footer],
    providers:[EventStore]
})

export class RootComponent { }
