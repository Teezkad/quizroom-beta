"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var RoomViewModel = /** @class */ (function (_super) {
    __extends(RoomViewModel, _super);
    function RoomViewModel() {
        var _this = _super.call(this) || this;
        _this.classroom = new Classroom("", "john@company.com", "New York", "5th Avenue", "2017");
        return _this;
    }
    Object.defineProperty(RoomViewModel.prototype, "classroom", {
        get: function () {
            return this.get("_classroom");
        },
        set: function (value) {
            this.set("_classroom", value);
        },
        enumerable: true,
        configurable: true
    });
    return RoomViewModel;
}(observable_1.Observable));
exports.RoomViewModel = RoomViewModel;
var Classroom = /** @class */ (function () {
    function Classroom(name, professor, institution, classCode, year) {
        this.name = name;
        this.professor = professor;
        this.institution = institution;
        this.classCode = classCode;
        this.year = year;
    }
    return Classroom;
}());
exports.Classroom = Classroom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vbS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm9vbS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBRTlEO0lBQW1DLGlDQUFVO0lBRXpDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQzs7SUFDN0YsQ0FBQztJQUVELHNCQUFJLG9DQUFTO2FBSWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBTkQsVUFBYyxLQUFnQjtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUtMLG9CQUFDO0FBQUQsQ0FBQyxBQWRELENBQW1DLHVCQUFVLEdBYzVDO0FBZFksc0NBQWE7QUFnQjFCO0lBUUksbUJBQVksSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUk7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNsYXNzcm9vbSA9IG5ldyBDbGFzc3Jvb20oXCJcIiwgXCJqb2huQGNvbXBhbnkuY29tXCIsIFwiTmV3IFlvcmtcIiwgXCI1dGggQXZlbnVlXCIsIFwiMjAxN1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2xhc3Nyb29tKHZhbHVlOiBDbGFzc3Jvb20pIHtcclxuICAgICAgICB0aGlzLnNldChcIl9jbGFzc3Jvb21cIiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFzc3Jvb20oKTogQ2xhc3Nyb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfY2xhc3Nyb29tXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3Nyb29te1xyXG4gICAgXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHByb2Zlc3Nvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGluc3RpdHV0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2xhc3NDb2RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgeWVhcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2Zlc3NvciwgaW5zdGl0dXRpb24sIGNsYXNzQ29kZSwgeWVhciApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9mZXNzb3IgPSBwcm9mZXNzb3I7XHJcbiAgICAgICAgdGhpcy5pbnN0aXR1dGlvbiA9IGluc3RpdHV0aW9uO1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb2RlID0gY2xhc3NDb2RlO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4iXX0=