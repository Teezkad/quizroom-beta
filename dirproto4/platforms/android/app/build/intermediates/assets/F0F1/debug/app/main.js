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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw4REFBNEQ7QUFFNUQsdURBQTBEO0FBQzFELGlDQUFtQztBQUNuQywyQkFBeUI7QUFFekIsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNaLHFGQUFxRjtJQUNyRixPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxxQ0FBcUM7SUFDcEQsa0JBQWtCLEVBQUUsVUFBQyxJQUFTO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGdDQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBUyxRQUFRO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFTLEtBQUs7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDQSxDQUFDO0FBRUosR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcblxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgXCIuL2J1bmRsZS1jb25maWdcIjtcblxuZmlyZWJhc2UuaW5pdCh7XG4gIC8vcGVyc2lzdCBzaG91bGQgYmUgc2V0IHRvIGZhbHNlIGFzIG90aGVyd2lzZSBudW1iZXJzIGFyZW4ndCByZXR1cm5lZCBkdXJpbmcgbGl2ZXN5bmNcbiAgcGVyc2lzdDogZmFsc2UsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2ZpcnN0cHJvamVjdC0zNTNkMS5hcHBzcG90LmNvbScsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEudXNlci51aWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcbiAgICB9XG4gIH1cbn0pLnRoZW4oXG4gIGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gIH0sXG4gIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgfVxuICApO1xuXG5hcHAuc3RhcnQoeyBtb2R1bGVOYW1lOiBcImhvbWUvaG9tZS1wYWdlXCIgfSk7XG4iXX0=