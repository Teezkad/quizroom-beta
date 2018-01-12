"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../models/user.model");
var services_1 = require("../services");
var dialogs_1 = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    /*submit() {
       this.isAuthenticating = true;
       if (this.isLoggingIn) {
         this.login();
       } else {
         this.signUp();
       }
    }*/
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.routerExtensions.navigate(["/"], { clearHistory: true });
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    /* signUp() {
       this.firebaseService.register(this.user)
         .then(() => {
           this.isAuthenticating = false;
           this.toggleDisplay();
         })
         .catch((message:any) => {
           alert(message);
           this.isAuthenticating = false;
         });
     }
   */
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Giftler to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.firebaseService.resetPassword(data.text.trim())
                    .then(function (result) {
                    if (result) {
                        alert(result);
                    }
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gf-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQU9qRjtJQU1FLHdCQUFvQixlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMdEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUdaOzs7Ozs7O09BT0c7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7UUFFakUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztZQUNqQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVGOzs7Ozs7Ozs7OztLQVdDO0lBQ0EsdUNBQWMsR0FBZDtRQUFBLGlCQWtCQTtRQWhCRSxnQkFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsa0ZBQWtGO1lBQzNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNqRCxJQUFJLENBQUMsVUFBQyxNQUFVO29CQUNmLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoQixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVGLHNDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBdEVVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsWUFBWTtTQUMxQixDQUFDO3lDQU9xQywwQkFBZTtZQUNkLG9DQUFnQjtPQVAzQyxjQUFjLENBdUUxQjtJQUFELHFCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdnZi1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcInVzZXJAbmF0aXZlc2NyaXB0Lm9yZ1wiO1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuIFxyXG4gLypzdWJtaXQoKSB7XHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuIH0qL1xyXG5cclxuICBsb2dpbigpIHtcclxuICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gLyogc2lnblVwKCkge1xyXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4qL1xyXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xyXG5cclxuICAgIHByb21wdCh7XHJcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBHaWZ0bGVyIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0OmFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gfVxyXG4gIFxyXG50b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxufSJdfQ==