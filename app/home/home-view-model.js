"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var core_1 = require("@angular/core");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.counter = 10;
        return _this;
    }
    Object.defineProperty(HomeViewModel.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + "taps left";
            }
            else {
                return 'You succeeded';
            }
        },
        enumerable: true,
        configurable: true
    });
    HomeViewModel.prototype.onTap = function () {
        this.counter--;
    };
    HomeViewModel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HomeViewModel);
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHNDQUEyQztBQUkzQztJQUFtQyxpQ0FBVTtJQUV6QztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQUhELGFBQU8sR0FBVyxFQUFFLENBQUM7O0lBR3JCLENBQUM7SUFFRCxzQkFBSSxrQ0FBTzthQUFYO1lBQ0ksRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRSxDQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBaEJRLGFBQWE7UUFGekIsaUJBQVUsRUFBRTs7T0FFQSxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsQ0FBbUMsdUJBQVUsR0FrQjVDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgY291bnRlcjogbnVtYmVyID0gMTA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYoIHRoaXMuY291bnRlciA+MCApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlciArIFwidGFwcyBsZWZ0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ1lvdSBzdWNjZWVkZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UYXAoKXtcbiAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgfVxuXG59XG4iXX0=