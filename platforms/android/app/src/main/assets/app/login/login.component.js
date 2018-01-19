"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_model_1 = require("../models/User.model");
var services_1 = require("../services");
var dialogs_1 = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var frame_1 = require("ui/frame");
var login_view_model_1 = require("./login-view-model");
function onDrawerButtonTap(args) {
    var sideDrawer = frame_1.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}
exports.onDrawerButtonTap = onDrawerButtonTap;
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }
    var page = args.object;
    page.bindingContext = new login_view_model_1.LoginViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function register() {
    frame_1.topmost().navigate({
        moduleName: "register/register.component",
        transition: {
            name: "fade"
        }
    });
}
exports.register = register;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(firebaseService, routerExtensions) {
        this.firebaseService = firebaseService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new User_model_1.User();
        this.user.email = "deezz";
        this.user.password = "";
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
        this.isAuthenticating = true;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            frame_1.topmost().navigate({
                moduleName: "dashboard",
                transition: {
                    name: "fade"
                }
            });
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
            templateUrl: 'login.xml'
        }),
        __metadata("design:paramtypes", [services_1.FirebaseService,
            router_extensions_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLG1EQUEwQztBQUMxQyx3Q0FBNEM7QUFDNUMsc0NBQWtDO0FBQ2xDLG1GQUFpRjtBQUdqRixrQ0FBbUM7QUFHbkMsdURBQW9EO0FBR3BELDJCQUFrQyxJQUFlO0lBQy9DLElBQU0sVUFBVSxHQUFrQixlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFIRCw4Q0FHQztBQUVELHdCQUErQixJQUFtQjtJQUNoRDs7OztrRUFJOEQ7SUFDOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWMsRUFBRSxDQUFDO0FBQzdDLENBQUM7QUFaRCx3Q0FZQztBQUVEO0lBQ0UsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2pCLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07U0FDZjtLQUNKLENBQUMsQ0FBQztBQUNILENBQUM7QUFQRCw0QkFPQztBQU9EO0lBTUUsd0JBQW9CLGVBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVaOzs7Ozs7O09BT0c7SUFFRiw4QkFBSyxHQUFMO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNqQixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO2lCQUNmO2FBQ0osQ0FBQyxDQUFBO1FBRUYsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsT0FBVztZQUNqQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVGOzs7Ozs7Ozs7OztLQVdDO0lBQ0EsdUNBQWMsR0FBZDtRQUFBLGlCQWtCQTtRQWhCRSxnQkFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsa0ZBQWtGO1lBQzNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNqRCxJQUFJLENBQUMsVUFBQyxNQUFVO29CQUNmLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoQixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVGLHNDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBM0VVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDO3lDQU9xQywwQkFBZTtZQUNkLG9DQUFnQjtPQVAzQyxjQUFjLENBcUYxQjtJQUFELHFCQUFDO0NBQUEsQUFyRkQsSUFxRkM7QUFyRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9tb2RlbHMvVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7cHJvbXB0fSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5WaWV3TW9kZWwgfSBmcm9tIFwiLi9sb2dpbi12aWV3LW1vZGVsXCI7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmF3ZXJCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcInNpZGVEcmF3ZXJcIik7XHJcbiAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XHJcbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFRoZSBcIm9uTmF2aWdhdGluZ1RvXCIgZXZlbnQgaGFuZGxlciBsZXRzIHlvdSBkZXRlY3QgaWYgdGhlIHVzZXIgbmF2aWdhdGVkIHdpdGggYSBiYWNrIGJ1dHRvbi5cclxuICAqIFNraXBwaW5nIHRoZSByZS1pbml0aWFsaXphdGlvbiBvbiBiYWNrIG5hdmlnYXRpb24gbWVhbnMgdGhlIHVzZXIgd2lsbCBzZWUgdGhlXHJcbiAgKiBwYWdlIGluIHRoZSBzYW1lIGRhdGEgc3RhdGUgdGhhdCBoZSBsZWZ0IGl0IGluIGJlZm9yZSBuYXZpZ2F0aW5nLlxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMb2dpblZpZXdNb2RlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoKXtcclxuICB0b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgbW9kdWxlTmFtZTogXCJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIixcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgfVxyXG59KTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2dmLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLnhtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcblxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJkZWV6elwiO1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gLypzdWJtaXQoKSB7XHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuIH0qL1xyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XHJcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICAgIG1vZHVsZU5hbWU6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuIC8qIHNpZ25VcCgpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuKi9cclxuICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuXHJcbiAgICBwcm9tcHQoe1xyXG4gICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR2lmdGxlciB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICBhbGVydChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuIH1cclxuICBcclxudG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICB9XHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xyXG4qIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBSYWRTaWRlRHJhd2VyIHZpZXcgYW5kXHJcbiogdXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbn0iXX0=