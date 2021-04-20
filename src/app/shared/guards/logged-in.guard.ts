import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private auth : AuthService, private router: Router){}
  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> 
  {
    const user = await this.auth.afAuth.currentUser;
    console.log(user);
    
    if (user)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then(r => {});
      return false;
    }

  }
  
}
