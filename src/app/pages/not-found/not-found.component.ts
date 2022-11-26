import { Component } from '@angular/core';
import { NavigationService } from '@services/navigation.service';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public CONST = Constants

  constructor(private _navigationService: NavigationService) { }

  public goToHomePage(): void{
    this._navigationService.getHomePage();
  }

}
