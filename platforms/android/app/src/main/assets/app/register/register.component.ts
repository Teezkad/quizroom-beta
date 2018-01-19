import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User.model';
import {FirebaseService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
  moduleId: module.id,
  selector: 'gf-register',
  templateUrl: 'register.html'
})
 
 export class RegisterComponent{ 
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;


    constructor(private firebaseService: FirebaseService,
        private routerExtensions: RouterExtensions
      ) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
        // this.user.firstName = "";
        // this.user.lastName = "";
        // this.user.instructor= false;
        // this.user.professor = false;
      }


 signUp() {
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
      });
      this.routerExtensions.navigate(['login']);
  }


 }

    