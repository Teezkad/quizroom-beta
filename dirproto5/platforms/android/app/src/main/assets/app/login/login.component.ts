import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User.model';
import {FirebaseService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { topmost } from "ui/frame";
import { NavigatedData, Page } from "ui/page";
import {Router} from '@angular/router';
import { LoginViewModel } from "./login-view-model";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import observableModule = require("data/observable");
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


// export function register(){
//   topmost().navigate({
//     moduleName: "register/register.component",
//     transition: {
//         name: "fade"
//     }
// });
// }

@Component({
  selector: 'gf-login',
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent extends observableModule.Observable{
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;

  
  constructor(private firebaseService: FirebaseService,
              private routerExtensions: RouterExtensions
            ) {
              super();
              this.user = new User();
              this.user.email = "";
              this.user.password = "";
            }
 
 /*submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
 }*/

 public login() {
    this.isAuthenticating = true;
     this.firebaseService.login(this.user)
      .then(() => {
        this.isAuthenticating = false;
        topmost().navigate({
          moduleName: "home",
          transition: {
              name: "fade"
          }
      })

      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

 /* signUp() {
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
      });
  }
*/
  forgotPassword() {

    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for Giftler to reset your password.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {
        this.firebaseService.resetPassword(data.text.trim())
          .then((result:any) => {
            if(result){
              alert(result);
            }
         });
      }
    });
 }
  
toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }


/* ***********************************************************
* According to guidelines, if you have a drawer on your page, you should always
* have a button that opens it. Get a reference to the RadSideDrawer view and
* use the showDrawer() function to open the app drawer section.
*************************************************************/


}