"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
// import { BackendService } from "./services/backend.service";
// import firebase = require("nativescript-plugin-firebase");
// firebase.init({
//   //persist should be set to false as otherwise numbers aren't returned during livesync
//   persist: false,
//   storageBucket: 'gs://directed-studies.appspot.com',
//   onAuthStateChanged: (data: any) => {
//     console.log(JSON.stringify(data))
//     if (data.loggedIn) {
//       BackendService.token = data.user.uid;
//     } else {
//       BackendService.token = "";
//     }
//   }
// }).then(
//   function(instance) {
//     console.log("firebase.init done");
//   },
//   function(error) {
//     console.log("firebase.init error: " + error);
//   }
//   );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUV6QyxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUM7QUFFekQsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUs3RCxrQkFBa0I7QUFDbEIsMEZBQTBGO0FBQzFGLG9CQUFvQjtBQUNwQix3REFBd0Q7QUFDeEQseUNBQXlDO0FBQ3pDLHdDQUF3QztBQUN4QywyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLE1BQU07QUFDTixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLHlDQUF5QztBQUN6QyxPQUFPO0FBQ1Asc0JBQXNCO0FBQ3RCLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ04sT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG4vLyBpbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuLy8gaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cblxuXG5cbi8vIGZpcmViYXNlLmluaXQoe1xuLy8gICAvL3BlcnNpc3Qgc2hvdWxkIGJlIHNldCB0byBmYWxzZSBhcyBvdGhlcndpc2UgbnVtYmVycyBhcmVuJ3QgcmV0dXJuZWQgZHVyaW5nIGxpdmVzeW5jXG4vLyAgIHBlcnNpc3Q6IGZhbHNlLFxuLy8gICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9kaXJlY3RlZC1zdHVkaWVzLmFwcHNwb3QuY29tJyxcbi8vICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4vLyAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbi8vICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS51c2VyLnVpZDtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSkudGhlbihcbi8vICAgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbi8vICAgfSxcbi8vICAgZnVuY3Rpb24oZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuLy8gICB9XG4vLyAgICk7XG5cblxuXG4iXX0=