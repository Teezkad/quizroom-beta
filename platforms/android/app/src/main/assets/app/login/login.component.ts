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

export function onDrawerButtonTap(args: EventData) {
  const sideDrawer = <RadSideDrawer>topmost().getViewById("sideDrawer");
  sideDrawer.showDrawer();
}

export function onNavigatingTo(args: NavigatedData) {
  /* ***********************************************************
  * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
  * Skipping the re-initialization on back navigation means the user will see the
  * page in the same data state that he left it in before navigating.
  *************************************************************/
  if (args.isBackNavigation) {
      return;
  }

  const page = <Page>args.object;
  page.bindingContext = new LoginViewModel();
}

export function register(){
  topmost().navigate({
    moduleName: "register/register.component",
    transition: {
        name: "fade"
    }
});
}

@Component({
  moduleId: module.id,
  selector: 'gf-login',
  templateUrl: 'login.xml'
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;

  
  constructor(private firebaseService: FirebaseService,
              private routerExtensions: RouterExtensions
            ) {
              this.user = new User();
              this.user.email = "deezz";
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

  login() {
    this.isAuthenticating = true;
     this.firebaseService.login(this.user)
      .then(() => {
        this.isAuthenticating = false;
        topmost().navigate({
          moduleName: "dashboard",
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