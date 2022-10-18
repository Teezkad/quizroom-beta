"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backend_service_1 = require("./services/backend.service");
var firebase = require("nativescript-plugin-firebase");
var app = require("application");
require("./bundle-config");
firebase.init({
    //persist should be set to false as otherwise numbers aren't returned during livesync
    persist: false,
    storageBucket: 'gs://firstproject-353d1.appspot.com',
    onAuthStateChanged: function (data) {
        console.log(JSON.stringify(data));
        if (data.loggedIn) {
            backend_service_1.BackendService.token = data.user.uid;
        }
        else {
            backend_service_1.BackendService.token = "";
        }
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
app.start({ moduleName: "home/home-page" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw4REFBNEQ7QUFFNUQsdURBQTBEO0FBQzFELGlDQUFtQztBQUNuQywyQkFBeUI7QUFFekIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNaLHFGQUFxRjtJQUNyRixPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxxQ0FBcUM7SUFDcEQsa0JBQWtCLEVBQUUsVUFBQyxJQUFTO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGdDQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBUyxRQUFRO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFTLEtBQUs7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDQSxDQUFDO0FBRUosR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IFwiLi9idW5kbGUtY29uZmlnXCI7XHJcblxyXG5maXJlYmFzZS5pbml0KHtcclxuICAvL3BlcnNpc3Qgc2hvdWxkIGJlIHNldCB0byBmYWxzZSBhcyBvdGhlcndpc2UgbnVtYmVycyBhcmVuJ3QgcmV0dXJuZWQgZHVyaW5nIGxpdmVzeW5jXHJcbiAgcGVyc2lzdDogZmFsc2UsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ2dzOi8vZmlyc3Rwcm9qZWN0LTM1M2QxLmFwcHNwb3QuY29tJyxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBkYXRhLnVzZXIudWlkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufSkudGhlbihcclxuICBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgfSxcclxuICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcclxuICB9XHJcbiAgKTtcclxuXHJcbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6IFwiaG9tZS9ob21lLXBhZ2VcIiB9KTtcclxuIl19