System.register(['angular2/platform/browser', './root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, root_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            // setTimeout(() => {
            browser_1.bootstrap(root_1.RootComponent);
        }
    }
});
// },1000);
//# sourceMappingURL=boot.js.map