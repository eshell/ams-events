/**
 * Created by erics on 3/15/2016.
 */

import {Component, Input} from "angular2/core";
import {EventStore} from "./event-store";

@Component({
    selector:'ams-event-input',
    template:
`
<div class="row">
<div class="col s6">
<input type="text" #newInput (keyup.enter)="save(newInput.value)" autofocus="true"/>
</div>
<div class="col s6">
{{latest.id}}{{latest.name}}
</div>
</div>


`
})
export class EventInput {

    constructor(private _Store:EventStore){
        
    }
    get latest(){
        return this._Store.latest;
    }
    save(val){
        this._Store.save(val);
    }

}