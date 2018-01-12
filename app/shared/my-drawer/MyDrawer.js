"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var MyDrawer_view_model_1 = require("./MyDrawer-view-model");
/* ***********************************************************
* Use the "loaded" event handler of the wrapping layout element to bind the view model to your view.
*************************************************************/
function onLoaded(args) {
    var component = args.object;
    var componentTitle = component.get("selectedPage");
    component.bindingContext = new MyDrawer_view_model_1.MyDrawerViewModel(componentTitle);
}
exports.onLoaded = onLoaded;
/* ***********************************************************
* Use the "itemTap" event handler of the <ListView> component for handling list item taps.
* The "itemTap" event handler of the app drawer <ListView> is used to navigate the app
* based on the tapped navigationItem's route.
*************************************************************/
function onNavigationItemTap(args) {
    var navigationItem = args.view.bindingContext;
    frame_1.topmost().navigate({
        moduleName: navigationItem.route,
        transition: {
            name: "fade"
        }
    });
}
exports.onNavigationItemTap = onNavigationItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlEcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeURyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUFtQztBQUluQyw2REFBMEQ7QUFFMUQ7OzhEQUU4RDtBQUM5RCxrQkFBeUIsSUFBZTtJQUNwQyxJQUFNLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXJELFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBTEQsNEJBS0M7QUFFRDs7Ozs4REFJOEQ7QUFDOUQsNkJBQW9DLElBQW1CO0lBQ25ELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRWhELGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxjQUFjLENBQUMsS0FBSztRQUNoQyxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNmO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVRELGtEQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5cbmltcG9ydCB7IE15RHJhd2VyVmlld01vZGVsIH0gZnJvbSBcIi4vTXlEcmF3ZXItdmlldy1tb2RlbFwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBVc2UgdGhlIFwibG9hZGVkXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgd3JhcHBpbmcgbGF5b3V0IGVsZW1lbnQgdG8gYmluZCB0aGUgdmlldyBtb2RlbCB0byB5b3VyIHZpZXcuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBjb21wb25lbnRUaXRsZSA9IGNvbXBvbmVudC5nZXQoXCJzZWxlY3RlZFBhZ2VcIik7XG5cbiAgICBjb21wb25lbnQuYmluZGluZ0NvbnRleHQgPSBuZXcgTXlEcmF3ZXJWaWV3TW9kZWwoY29tcG9uZW50VGl0bGUpO1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBVc2UgdGhlIFwiaXRlbVRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIDxMaXN0Vmlldz4gY29tcG9uZW50IGZvciBoYW5kbGluZyBsaXN0IGl0ZW0gdGFwcy5cbiogVGhlIFwiaXRlbVRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIGFwcCBkcmF3ZXIgPExpc3RWaWV3PiBpcyB1c2VkIHRvIG5hdmlnYXRlIHRoZSBhcHBcbiogYmFzZWQgb24gdGhlIHRhcHBlZCBuYXZpZ2F0aW9uSXRlbSdzIHJvdXRlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IG5hdmlnYXRpb25JdGVtLnJvdXRlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=