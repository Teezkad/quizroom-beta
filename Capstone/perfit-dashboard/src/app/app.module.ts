import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthguardGuard } from './authguard.guard';
import { LogoutComponent } from './logout/logout.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';



export const firebaseConfig = {
      apiKey: "AIzaSyC6empcDciB_guvtZiNwFk7R-lTVThpPeQ",
      authDomain: "perfitdental-7951d.firebaseapp.com",
      databaseURL: "https://perfitdental-7951d.firebaseio.com",
      projectId: "perfitdental-7951d",
      storageBucket: "perfitdental-7951d.appspot.com",
      messagingSenderId: "539232777666"
}


const appRoutes:Routes = [
  {
    path: '',
    component: LoginpageComponent
  },

  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'uploader',
    canActivate: [AuthguardGuard],
    component: UploaderComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UploaderComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [UserService, AuthguardGuard,CookieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
