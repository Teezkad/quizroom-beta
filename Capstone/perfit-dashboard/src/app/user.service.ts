import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  private isUserLoggedIn;
  public username;

  constructor() { 
  	this.isUserLoggedIn = false;
  }


  setUserLoggedIn(){
  	this.isUserLoggedIn = true;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

  getUserStatus(){
  	return this.isUserLoggedIn;
  }



}
