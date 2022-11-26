import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Constants } from '@constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor( private _datePipe: DatePipe ) { }

  public APIFormatDate(date: Date, pattern: string, daysBefore?: number): string {
    return this._datePipe.transform(date.setDate(date.getDate()-(daysBefore || Constants.ZERO)), pattern)!; 
  }

}
