Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var frame_1 = require("tns-core-modules/ui/frame");
var ns_router_link_1 = require("./ns-router-link");
var ns_router_link_active_1 = require("./ns-router-link-active");
var page_router_outlet_1 = require("./page-router-outlet");
var ns_location_strategy_1 = require("./ns-location-strategy");
var ns_platform_location_1 = require("./ns-platform-location");
var ns_route_reuse_strategy_1 = require("./ns-route-reuse-strategy");
var router_extensions_1 = require("./router-extensions");
var common_2 = require("../common");
var page_router_outlet_2 = require("./page-router-outlet");
exports.PageRoute = page_router_outlet_2.PageRoute;
var router_extensions_2 = require("./router-extensions");
exports.RouterExtensions = router_extensions_2.RouterExtensions;
var ns_module_factory_loader_1 = require("./ns-module-factory-loader");
exports.NSModuleFactoryLoader = ns_module_factory_loader_1.NSModuleFactoryLoader;
var NativeScriptRouterModule = (function () {
    function NativeScriptRouterModule() {
    }
    NativeScriptRouterModule.forRoot = function (routes, config) {
        return router_1.RouterModule.forRoot(routes, config);
    };
    NativeScriptRouterModule.forChild = function (routes) {
        return router_1.RouterModule.forChild(routes);
    };
    NativeScriptRouterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        ns_router_link_1.NSRouterLink,
                        ns_router_link_active_1.NSRouterLinkActive,
                        page_router_outlet_1.PageRouterOutlet
                    ],
                    providers: [
                        {
                            provide: ns_location_strategy_1.NSLocationStrategy,
                            useFactory: provideLocationStrategy,
                            deps: [[ns_location_strategy_1.NSLocationStrategy, new core_1.Optional(), new core_1.SkipSelf()], frame_1.Frame]
                        },
                        { provide: common_1.LocationStrategy, useExisting: ns_location_strategy_1.NSLocationStrategy },
                        ns_platform_location_1.NativescriptPlatformLocation,
                        { provide: common_1.PlatformLocation, useClass: ns_platform_location_1.NativescriptPlatformLocation },
                        router_extensions_1.RouterExtensions,
                        ns_route_reuse_strategy_1.NSRouteReuseStrategy,
                        { provide: router_1.RouteReuseStrategy, useExisting: ns_route_reuse_strategy_1.NSRouteReuseStrategy }
                    ],
                    imports: [
                        router_1.RouterModule,
                        common_2.NativeScriptCommonModule,
                    ],
                    exports: [
                        router_1.RouterModule,
                        ns_router_link_1.NSRouterLink,
                        ns_router_link_active_1.NSRouterLinkActive,
                        page_router_outlet_1.PageRouterOutlet
                    ],
                    schemas: [core_1.NO_ERRORS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    NativeScriptRouterModule.ctorParameters = function () { return []; };
    return NativeScriptRouterModule;
}());
exports.NativeScriptRouterModule = NativeScriptRouterModule;
function provideLocationStrategy(locationStrategy, frame) {
    return locationStrategy ? locationStrategy : new ns_location_strategy_1.NSLocationStrategy(frame);
}
exports.provideLocationStrategy = provideLocationStrategy;
//# sourceMappingURL=router.module.js.map