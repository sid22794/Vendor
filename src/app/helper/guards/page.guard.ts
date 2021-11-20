import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class PageGuard implements CanLoad {
  constructor(private helperService: HelperService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.getUserDetails()?.username) return true;
    else {
      this.helperService.redirect('/auth/login');
      return false;
    }
  }

  getUserDetails() {
    return JSON.parse(
      this.helperService.getItem('details') || JSON.stringify({})
    );
  }
}
