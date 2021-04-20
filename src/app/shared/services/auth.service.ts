import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import auth from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase';


const LSITEM = "user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: firebase.User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem(LSITEM, this.user.uid)
      }
      else {
        localStorage.setItem(LSITEM, '')
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/list'])
  }

  async logout()
  {
    await this.afAuth.signOut()
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    result.user?.sendEmailVerification();
  }

  async sendEmailVerification() {
    await this.user?.sendEmailVerification();
  }

  async sendPasswordResetEmail(email: string)
  {
    await this.afAuth.sendPasswordResetEmail(email);
  }

  async loginWithGoogle()
  {
    await this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider());
    this.router.navigate(['/list'])
  }

  get isLoggedIn() : boolean
  {
    const uid = localStorage.getItem(LSITEM)
    return uid !== null;
  }
}
