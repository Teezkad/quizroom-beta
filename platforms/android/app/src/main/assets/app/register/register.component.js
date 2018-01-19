"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_model_1 = require("../models/User.model");
var services_1 = require("../services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new User_model_1.User();
        this.user.email = "";
        this.user.password = "";
        // this.user.firstName = "";
        // this.user.lastName = "";
        // this.user.instructor= false;
        // this.user.professor = false;
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
        this.routerExtensions.navigate(['login']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFFNUMsbUZBQWlGO0FBUWhGO0lBTUcsMkJBQW9CLGVBQWdDLEVBQ3hDLGdCQUFrQztRQUQxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUw5QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLCtCQUErQjtJQUNqQyxDQUFDO0lBR04sa0NBQU0sR0FBTjtRQUFBLGlCQVVFO1FBVEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUE3QlcsaUJBQWlCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGVBQWU7U0FDN0IsQ0FBQzt5Q0FRdUMsMEJBQWU7WUFDdEIsb0NBQWdCO09BUHBDLGlCQUFpQixDQWdDN0I7SUFBRCx3QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy9Vc2VyLm1vZGVsJztcclxuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHtwcm9tcHR9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2dmLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnXHJcbn0pXHJcbiBcclxuIGV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudHsgXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAvLyB0aGlzLnVzZXIuZmlyc3ROYW1lID0gXCJcIjtcclxuICAgICAgICAvLyB0aGlzLnVzZXIubGFzdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5pbnN0cnVjdG9yPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnVzZXIucHJvZmVzc29yID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gc2lnblVwKCkge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gIH1cclxuXHJcblxyXG4gfVxyXG5cclxuICAgICJdfQ==