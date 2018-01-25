"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    FirebaseService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        firebase.logout();
    };
    FirebaseService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    /* getMyClassList(): Observable<any> {
       return new Observable((observer: any) => {
         let path = 'Classrooms';
         
           let onValueEvent = (snapshot: any) => {
             this.ngZone.run(() => {
               let results = this.handleSnapshot(snapshot.value);
               console.log(JSON.stringify(results))
                observer.next(results);
             });
           };
           firebase.addValueEventListener(onValueEvent, `/${path}`);
       }).share();
     }*/
    /*
    getMyClassroom(id: string): Observable<any> {
      return new Observable((observer: any) => {
        observer.next(this._allItems.filter(s => s.id === id)[0]);
      }).share();
    }*/
    /*
    getMyMessage(): Observable<any>{
      return new Observable((observer:any) => {
        firebase.getRemoteConfig({
        developerMode: false, // play with this boolean to get more frequent updates during development
        cacheExpirationSeconds: 300, // 10 minutes, default is 12 hours.. set to a lower value during dev
        properties: [{
        key: "message",
        default: "Happy Holidays!"
      }]
    }).then(
          function (result) {
            console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
            for (let entry in result.properties)
              {
                observer.next(result.properties[entry]);
              }
          }
      );
    }).share();
    }*/
    /*
      handleSnapshot(data: any) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
          for (let id in data) {
            let result = (<any>Object).assign({id: id}, data[id]);
            if(BackendService.token === result.UID){
              this._allItems.push(result);
            }
          }
          this.publishUpdates();
        }
        return this._allItems;
      }
    
      
       publishUpdates() {
        // here, we sort must emit a *new* value (immutability!)
        this._allItems.sort(function(a, b){
            if(a.date < b.date) return -1;
            if(a.date > b.date) return 1;
          return 0;
        })
        this.items.next([...this._allItems]);
      }
    
      add(Classroom: string) {
        return firebase.push(
            "/Classrooms",
            { "name": Classroom, "UID": BackendService.token, "date": 0 - Date.now(), "imagepath": ""}
          ).then(
            function (result:any) {
              return 'Classroom added to your wishlist!';
            },
            function (errorMessage:any) {
              console.log(errorMessage);
            });
      }
    
      editClassroom(id:string, description: string, imagepath: string){
        this.publishUpdates();
        return firebase.update("/Classrooms/"+id+"",{
            description: description,
            imagepath: imagepath})
          .then(
            function (result:any) {
              return 'You have successfully edited this Classroom!';
            },
            function (errorMessage:any) {
              console.log(errorMessage);
            });
      }
      editDescription(id:string, description: string){
        this.publishUpdates();
        return firebase.update("/Classrooms/"+id+"",{
            description: description})
          .then(
            function (result:any) {
              return 'You have successfully edited the description!';
            },
            function (errorMessage:any) {
              console.log(errorMessage);
            });
      }
      delete(Classroom: Classroom) {
        return firebase.remove("/Classrooms/"+Classroom.id+"")
          .catch(this.handleErrors);
      }
      
      uploadFile(localPath: string, file?: any): Promise<any> {
          let filename = this.utils.getFilename(localPath);
          let remotePath = `${filename}`;
          return firebase.uploadFile({
            remoteFullPath: remotePath,
            localFullPath: localPath,
            onProgress: function(status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
          });
      }
    
      getDownloadUrl(remoteFilePath: string): Promise<any> {
          return firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath})
          .then(
            function (url:string) {
              return url;
            },
            function (errorMessage:any) {
              console.log(errorMessage);
            });
      }*/
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQscURBQW1EO0FBQ25ELHVEQUEwRDtBQUUxRCx3REFBcUQ7QUFFckQsbUNBQWlDO0FBR2pDO0lBQ0UseUJBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFHeEIsVUFBSyxHQUFzQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0QsY0FBUyxHQUFxQixFQUFFLENBQUM7SUFKdkMsQ0FBQztJQU1ILGtDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDRCxVQUFVLE1BQVU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2QsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsVUFBQyxZQUFpQjtZQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQzlCLEtBQUssRUFBRSxLQUFLO1NBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFVLFlBQWdCO1lBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRjs7Ozs7Ozs7Ozs7OztRQWFJO0lBRUg7Ozs7O09BS0c7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFHTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkZLO0lBRUgsc0NBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFwTVUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUdPLGFBQU07T0FGYixlQUFlLENBcU0zQjtJQUFELHNCQUFDO0NBQUEsQUFyTUQsSUFxTUM7QUFyTVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyLCBDbGFzc3Jvb219IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKXt9XHJcbiAgICBcclxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PENsYXNzcm9vbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PENsYXNzcm9vbT4gPSBbXTtcclxuICBcclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSByZXN1bHQudWlkO1xyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcclxuICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuIC8qIGdldE15Q2xhc3NMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnQ2xhc3Nyb29tcyc7XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuICB9Ki9cclxuXHJcbiAgLypcclxuICBnZXRNeUNsYXNzcm9vbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XHJcbiAgICB9KS5zaGFyZSgpO1xyXG4gIH0qL1xyXG5cclxuICAvKlxyXG4gIGdldE15TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOmFueSkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5nZXRSZW1vdGVDb25maWcoe1xyXG4gICAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZSwgLy8gcGxheSB3aXRoIHRoaXMgYm9vbGVhbiB0byBnZXQgbW9yZSBmcmVxdWVudCB1cGRhdGVzIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICBjYWNoZUV4cGlyYXRpb25TZWNvbmRzOiAzMDAsIC8vIDEwIG1pbnV0ZXMsIGRlZmF1bHQgaXMgMTIgaG91cnMuLiBzZXQgdG8gYSBsb3dlciB2YWx1ZSBkdXJpbmcgZGV2XHJcbiAgICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgIGtleTogXCJtZXNzYWdlXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiSGFwcHkgSG9saWRheXMhXCJcclxuICAgIH1dXHJcbiAgfSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYXQgXCIgKyByZXN1bHQubGFzdEZldGNoICsgKHJlc3VsdC50aHJvdHRsZWQgPyBcIiAodGhyb3R0bGVkKVwiIDogXCJcIikpO1xyXG4gICAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gcmVzdWx0LnByb3BlcnRpZXMpIFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0LnByb3BlcnRpZXNbZW50cnldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfSkuc2hhcmUoKTtcclxuICB9Ki9cclxuXHJcbiAgICBcclxuLypcclxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcclxuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsIGFuZCBmaWx0ZXJcclxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcclxuICAgICAgICBpZihCYWNrZW5kU2VydmljZS50b2tlbiA9PT0gcmVzdWx0LlVJRCl7XHJcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgIHB1Ymxpc2hVcGRhdGVzKCkge1xyXG4gICAgLy8gaGVyZSwgd2Ugc29ydCBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcclxuICAgIHRoaXMuX2FsbEl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxJdGVtc10pO1xyXG4gIH1cclxuXHJcbiAgYWRkKENsYXNzcm9vbTogc3RyaW5nKSB7ICAgXHJcbiAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuICAgICAgICBcIi9DbGFzc3Jvb21zXCIsXHJcbiAgICAgICAgeyBcIm5hbWVcIjogQ2xhc3Nyb29tLCBcIlVJRFwiOiBCYWNrZW5kU2VydmljZS50b2tlbiwgXCJkYXRlXCI6IDAgLSBEYXRlLm5vdygpLCBcImltYWdlcGF0aFwiOiBcIlwifVxyXG4gICAgICApLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuICAgICAgICAgIHJldHVybiAnQ2xhc3Nyb29tIGFkZGVkIHRvIHlvdXIgd2lzaGxpc3QhJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyBcclxuICB9XHJcblxyXG4gIGVkaXRDbGFzc3Jvb20oaWQ6c3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpbWFnZXBhdGg6IHN0cmluZyl7XHJcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UudXBkYXRlKFwiL0NsYXNzcm9vbXMvXCIraWQrXCJcIix7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBpbWFnZXBhdGg6IGltYWdlcGF0aH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhpcyBDbGFzc3Jvb20hJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgfVxyXG4gIGVkaXREZXNjcmlwdGlvbihpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9DbGFzc3Jvb21zL1wiK2lkK1wiXCIse1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbn0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGhlIGRlc2NyaXB0aW9uISc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTsgIFxyXG4gIH1cclxuICBkZWxldGUoQ2xhc3Nyb29tOiBDbGFzc3Jvb20pIHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvQ2xhc3Nyb29tcy9cIitDbGFzc3Jvb20uaWQrXCJcIilcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgXHJcbiAgdXBsb2FkRmlsZShsb2NhbFBhdGg6IHN0cmluZywgZmlsZT86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMudXRpbHMuZ2V0RmlsZW5hbWUobG9jYWxQYXRoKTtcclxuICAgICAgbGV0IHJlbW90ZVBhdGggPSBgJHtmaWxlbmFtZX1gOyAgIFxyXG4gICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZVBhdGgsXHJcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogbG9jYWxQYXRoLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZyYWN0aW9uOiBcIiArIHN0YXR1cy5mcmFjdGlvbkNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERvd25sb2FkVXJsKHJlbW90ZUZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICByZXR1cm4gZmlyZWJhc2UuZ2V0RG93bmxvYWRVcmwoe1xyXG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVGaWxlUGF0aH0pXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgfSovXHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn0iXX0=