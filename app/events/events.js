System.register(["angular2/core", "./event-store"], function(exports_1, context_1) {
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
    var core_1, event_store_1;
    var Events;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_store_1_1) {
                event_store_1 = event_store_1_1;
            }],
        execute: function() {
            Events = (function () {
                function Events(_Store) {
                    this._Store = _Store;
                }
                Object.defineProperty(Events.prototype, "list", {
                    get: function () {
                        return this._Store.eventList;
                    },
                    enumerable: true,
                    configurable: true
                });
                Events = __decorate([
                    core_1.Component({
                        selector: 'ams-events-list',
                        template: "\n\n<ul class=\"collection\"  id=\"chat-window\">\n    <li *ngFor=\"#event of list\">\n       <a class=\"collection-item\">{{event.id}} - {{event.name}}</a>\n    </li>\n</ul>\n\n"
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [event_store_1.EventStore])
                ], Events);
                return Events;
            }());
            exports_1("Events", Events);
        }
    }
});
//# sourceMappingURL=events.js.map