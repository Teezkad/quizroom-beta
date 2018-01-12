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
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
                isSelected: selectedPage === "Search"
            },
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
                isSelected: selectedPage === "Settings"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlEcmF3ZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk15RHJhd2VyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0M7OzhEQUU4RDtBQUM5RDtJQUF1QyxxQ0FBVTtJQUc3Qzs7OztrRUFJOEQ7SUFDOUQsMkJBQVksWUFBb0I7UUFBaEMsWUFDSSxpQkFBTyxTQXlCVjtRQXZCRyxLQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEI7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFLFlBQVksS0FBSyxNQUFNO2FBQ3RDO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFLFlBQVksS0FBSyxRQUFRO2FBQ3hDO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsWUFBWSxLQUFLLFVBQVU7YUFDMUM7U0FDSixDQUFDOztJQUNOLENBQUM7SUFFRCxzQkFBSSw4Q0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBdUMsdUJBQVUsR0F1Q2hEO0FBdkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBpbiB5b3VyIGFwcCBkcmF3ZXIgaW4gdGhlIE15RHJhd2VyIGN1c3RvbSBjb21wb25lbnQgdmlldyBtb2RlbC5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0IGNsYXNzIE15RHJhd2VyVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uSXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBNeURyYXdlciB2aWV3IG1vZGVsIGNvbnN0cnVjdG9yIHRvIGluaXRpYWxpemUgdGhlIHByb3BlcnRpZXMgZGF0YSB2YWx1ZXMuXHJcbiAgICAqIFRoZSBuYXZpZ2F0aW9uSXRlbXMgcHJvcGVydHkgaXMgaW5pdGlhbGl6ZWQgaGVyZSBhbmQgaXMgZGF0YSBib3VuZCB0byA8TGlzdFZpZXc+IGluIHRoZSBNeURyYXdlciB2aWV3IGZpbGUuXHJcbiAgICAqIEFkZCwgcmVtb3ZlIG9yIGVkaXQgbmF2aWdhdGlvbkl0ZW1zIHRvIGNoYW5nZSB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgYXBwIGRyYXdlciBsaXN0LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdGVkUGFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImhvbWVcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcImhvbWUvaG9tZS1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMTVcIixcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZSA9PT0gXCJIb21lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwic2VhcmNoL3NlYXJjaC1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIlxcdWYwMDJcIixcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZSA9PT0gXCJTZWFyY2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZXR0aW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6IFwic2V0dGluZ3Mvc2V0dGluZ3MtcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMDEzXCIsXHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZFBhZ2UgPT09IFwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmF2aWdhdGlvbkl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uSXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIl19