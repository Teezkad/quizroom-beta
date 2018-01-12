"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../models/user.model");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gf-register',
            templateUrl: 'register.html'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFFNUMsbUZBQWlGO0FBUWhGO0lBTUcsMkJBQW9CLGVBQWdDLEVBQ3hDLGdCQUFrQztRQUQxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUw5QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHTixrQ0FBTSxHQUFOO1FBQUEsaUJBU0U7UUFSQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCVyxpQkFBaUI7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDO3lDQVF1QywwQkFBZTtZQUN0QixvQ0FBZ0I7T0FQcEMsaUJBQWlCLENBMkI3QjtJQUFELHdCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge3Byb21wdH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZ2YtcmVnaXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCdcclxufSlcclxuIFxyXG4gZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50eyBcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICB9XHJcblxyXG5cclxuIHNpZ25VcCgpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gfSJdfQ==