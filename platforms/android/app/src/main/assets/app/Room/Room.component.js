"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viewModel = require("./Room-view-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.RoomViewModel();
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRDtBQUdoRCxzQkFBNkIsSUFBSTtJQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDeEQsQ0FBQztBQUhELG9DQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL1Jvb20tdmlldy1tb2RlbFwiKTtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblBhZ2VMb2FkZWQoYXJncykge1xyXG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgdmlld01vZGVsLlJvb21WaWV3TW9kZWwoKTtcclxufVxyXG4iXX0=