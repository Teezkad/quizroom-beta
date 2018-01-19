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
                return this.counter + 'taps left';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHNDQUEwQztBQUkxQztJQUFtQyxpQ0FBVTtJQUV6QztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQUhELGFBQU8sR0FBVyxFQUFFLENBQUM7O0lBR3JCLENBQUM7SUFFRCxzQkFBSSxrQ0FBTzthQUFYO1lBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDdEMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBaEJRLGFBQWE7UUFGekIsaUJBQVUsRUFBRTs7T0FFQSxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsQ0FBbUMsdUJBQVUsR0FrQjVDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEluamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb3VudGVyOiBudW1iZXIgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpOiBTdHJpbmcge1xuICAgICAgICBpZih0aGlzLmNvdW50ZXIgPjApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlciArICd0YXBzIGxlZnQnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAnWW91IHN1Y2NlZWRlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRhcCgpe1xuICAgICAgICB0aGlzLmNvdW50ZXItLTtcbiAgICB9XG5cbn1cbiJdfQ==