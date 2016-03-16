/**
 * Created by erics on 3/15/2016.
 */
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
    var EventInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_store_1_1) {
                event_store_1 = event_store_1_1;
            }],
        execute: function() {
            EventInput = (function () {
                function EventInput(_Store) {
                    this._Store = _Store;
                }
                Object.defineProperty(EventInput.prototype, "latest", {
                    get: function () {
                        return this._Store.latest;
                    },
                    enumerable: true,
                    configurable: true
                });
                EventInput.prototype.save = function (val) {
                    this._Store.save(val);
                };
                EventInput = __decorate([
                    core_1.Component({
                        selector: 'ams-event-input',
                        template: "\n<div class=\"row\">\n<div class=\"col s6\">\n<input type=\"text\" #newInput (keyup.enter)=\"save(newInput.value)\" autofocus=\"true\"/>\n</div>\n<div class=\"col s6\">\n{{latest.id}}{{latest.name}}\n</div>\n</div>\n\n\n"
                    }), 
                    __metadata('design:paramtypes', [event_store_1.EventStore])
                ], EventInput);
                return EventInput;
            }());
            exports_1("EventInput", EventInput);
        }
    }
});
//# sourceMappingURL=event-input.js.map