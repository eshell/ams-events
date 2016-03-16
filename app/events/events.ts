import {Component, Injectable} from "angular2/core";
import {EventStore} from "./event-store";
@Component({
    selector:'ams-events-list',
    template:
`

<ul class="collection"  id="chat-window">
    <li *ngFor="#event of list">
       <a class="collection-item">{{event.id}} - {{event.name}}</a>
    </li>
</ul>

`
})

@Injectable()
export class Events {
    constructor(private _Store:EventStore){

    }
    get list(){
        return this._Store.eventList;
    }
    
}
