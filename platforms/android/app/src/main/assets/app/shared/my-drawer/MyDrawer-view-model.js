"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer custom component view model.
*************************************************************/
var MyDrawerViewModel = /** @class */ (function (_super) {
    __extends(MyDrawerViewModel, _super);
    /* ***********************************************************
    * Use the MyDrawer view model constructor to initialize the properties data values.
    * The navigationItems property is initialized here and is data bound to <ListView> in the MyDrawer view file.
    * Add, remove or edit navigationItems to change what is displayed in the app drawer list.
    *************************************************************/
    function MyDrawerViewModel(selectedPage) {
        var _this = _super.call(this) || this;
        _this._navigationItems = [
            {
                title: "Home",
                name: "home",
                route: "home/home-page",
                icon: "\uf015",
                isSelected: selectedPage === "Home"
            },
            {
                title: "Questions",
                name: "profile",
                route: "search/search-page",
                icon: "\uf002",
                isSelected: selectedPage === "Search"
            },
            {
                title: "Profile",
                name: "profile",
                route: "settings/settings-page",
                icon: "\uf013",
                isSelected: selectedPage === "Settings"
            },
            {
                title: "Login",
                name: "login",
                route: "login/login.component",
                icon: "\uf013",
                isSelected: selectedPage === "Login"
            },
            {
                title: "Class",
                name: "class",
                route: "Room/Room.component",
                icon: "\uf013",
                isSelected: selectedPage === "Room"
            }
        ];
        return _this;
    }
    Object.defineProperty(MyDrawerViewModel.prototype, "navigationItems", {
        get: function () {
            return this._navigationItems;
        },
        enumerable: true,
        configurable: true
    });
    return MyDrawerViewModel;
}(observable_1.Observable));
exports.MyDrawerViewModel = MyDrawerViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlEcmF3ZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk15RHJhd2VyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0M7OzhEQUU4RDtBQUM5RDtJQUF1QyxxQ0FBVTtJQUc3Qzs7OztrRUFJOEQ7SUFDOUQsMkJBQVksWUFBb0I7UUFBaEMsWUFDSSxpQkFBTyxTQXVDVjtRQXJDRyxLQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEI7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFLFlBQVksS0FBSyxNQUFNO2FBQ3RDO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVUsRUFBRSxZQUFZLEtBQUssUUFBUTthQUN4QztZQUNEO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsWUFBWSxLQUFLLFVBQVU7YUFDMUM7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsdUJBQXVCO2dCQUM5QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsWUFBWSxLQUFLLE9BQU87YUFDdkM7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsWUFBWSxLQUFLLE1BQU07YUFDdEM7U0FDSixDQUFDOztJQUNOLENBQUM7SUFFRCxzQkFBSSw4Q0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDTCx3QkFBQztBQUFELENBQUMsQUFyREQsQ0FBdUMsdUJBQVUsR0FxRGhEO0FBckRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBpbiB5b3VyIGFwcCBkcmF3ZXIgaW4gdGhlIE15RHJhd2VyIGN1c3RvbSBjb21wb25lbnQgdmlldyBtb2RlbC5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0IGNsYXNzIE15RHJhd2VyVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uSXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBNeURyYXdlciB2aWV3IG1vZGVsIGNvbnN0cnVjdG9yIHRvIGluaXRpYWxpemUgdGhlIHByb3BlcnRpZXMgZGF0YSB2YWx1ZXMuXHJcbiAgICAqIFRoZSBuYXZpZ2F0aW9uSXRlbXMgcHJvcGVydHkgaXMgaW5pdGlhbGl6ZWQgaGVyZSBhbmQgaXMgZGF0YSBib3VuZCB0byA8TGlzdFZpZXc+IGluIHRoZSBNeURyYXdlciB2aWV3IGZpbGUuXHJcbiAgICAqIEFkZCwgcmVtb3ZlIG9yIGVkaXQgbmF2aWdhdGlvbkl0ZW1zIHRvIGNoYW5nZSB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgYXBwIGRyYXdlciBsaXN0LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdGVkUGFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImhvbWVcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcImhvbWUvaG9tZS1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMTVcIixcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZSA9PT0gXCJIb21lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUXVlc3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInByb2ZpbGVcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcInNlYXJjaC9zZWFyY2gtcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMDAyXCIsXHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZFBhZ2UgPT09IFwiU2VhcmNoXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUHJvZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwcm9maWxlXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJzZXR0aW5ncy9zZXR0aW5ncy1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMTNcIixcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZSA9PT0gXCJTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJsb2dpbi9sb2dpbi5jb21wb25lbnRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRQYWdlID09PSBcIkxvZ2luXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xhc3NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY2xhc3NcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIlJvb20vUm9vbS5jb21wb25lbnRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFwiXFx1ZjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRQYWdlID09PSBcIlJvb21cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmF2aWdhdGlvbkl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uSXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIl19