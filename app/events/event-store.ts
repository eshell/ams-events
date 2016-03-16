/**
 * Created by erics on 3/15/2016.
 */

import {Event} from './event';
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventStore {
    private _events: Event[]=[];
    constructor(){
        for(let i=1;i<10;i++){
            this._events.push({id:(i*5),name:`event${i}`});
        }
    }
    get eventList(){
            return this._events;

    }
    get latest(){
        return this._events[0];
    }    
    save(input:string){
        this._events.push({
            id: this._events.length+2,
            name:input
        });
    }
    
}
