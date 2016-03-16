System.register(['angular2/core', "./events/events", "./events/event-store", "./events/event-input", "./events/nav-bar", "./events/footer"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, events_1, event_store_1, event_input_1, nav_bar_1, footer_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (event_store_1_1) {
                event_store_1 = event_store_1_1;
            },
            function (event_input_1_1) {
                event_input_1 = event_input_1_1;
            },
            function (nav_bar_1_1) {
                nav_bar_1 = nav_bar_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'ams-events',
                        template: "\n<div class=\"container\">\n<ams-navbar></ams-navbar>\n<ams-event-input></ams-event-input>\n<ams-events-list></ams-events-list>\n<ams-footer></ams-footer>\n</div>\n\n\n",
                        directives: [events_1.Events, event_input_1.EventInput, nav_bar_1.NavBar, footer_1.Footer],
                        providers: [event_store_1.EventStore]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=root.js.map