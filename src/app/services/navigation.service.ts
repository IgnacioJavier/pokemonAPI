import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Constants } from '@constants/constants';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router: Router,
              private _location: Location) { }

  public getCurrentUrl(): Observable<string> {
    return this._router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      );
  }

  public getBackLocation(): void {
    this._location.back();
  }

  public getHomePage(): void{
    this._router.navigateByUrl(Constants.ROUTE_DASHBOARD);
  }

  public getErrorPage(): void{
    this._router.navigateByUrl(Constants.ROUTE_NOT_FOUND);
  }

}
