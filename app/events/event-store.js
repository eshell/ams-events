/**
 * Created by erics on 3/15/2016.
 */
System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var EventStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventStore = (function () {
                function EventStore() {
                    this._events = [];
                    for (var i = 1; i < 10; i++) {
                        this._events.push({ id: (i * 5), name: "event" + i });
                    }
                }
                Object.defineProperty(EventStore.prototype, "eventList", {
                    get: function () {
                        return this._events;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EventStore.prototype, "latest", {
                    get: function () {
                        return this._events[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                EventStore.prototype.save = function (input) {
                    this._events.push({
                        id: this._events.length + 2,
                        name: input
                    });
                };
                EventStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EventStore);
                return EventStore;
            }());
            exports_1("EventStore", EventStore);
        }
    }
});
//# sourceMappingURL=event-store.js.map