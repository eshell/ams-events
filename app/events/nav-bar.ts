/**
 * Created by erics on 3/15/2016.
 */
import {Component} from "angular2/core";
@Component({
    selector:'ams-navbar',
    template:`
 <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">{{title}}</a>
    </div>
  </nav>
        
`
})
export class NavBar {
    title:string='events';
}