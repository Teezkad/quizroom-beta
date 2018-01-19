import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import {LoginViewModel} from "./login-view-model";
import { loginRouting } from "./login.routes";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting,
    LoginViewModel
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
