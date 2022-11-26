import { Component } from '@angular/core';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public CONST = Constants;

  public timeStamp: number = new Date().getFullYear();

}
