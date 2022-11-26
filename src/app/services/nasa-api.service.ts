import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '@constants/constants';
import { PictureDto } from '@models/pictureDto.interface';
import { UtilsService } from '@services/utils.service';
import { PokemonDto } from '../models/pokemonDto.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private queryParams: HttpParams = new HttpParams();
  private readonly thumbValue: boolean = true;

  constructor( private _utils: UtilsService,
               private _http: HttpClient ) { }

  public getPicturesList(date: Date, daysBefore: number): Observable<PictureDto[]> {
    const currentDate: string = this._utils.APIFormatDate(date, Constants.DATE_PATTERN);
    const beforeDate: string = this._utils.APIFormatDate(date, Constants.DATE_PATTERN, daysBefore);
    return this._http.get<PictureDto[]>(`${environment.API_URL}${Constants.APOD_ENDPOINT}`,
                                          {params: this.queryParams
                                            .set(Constants.API_KEY, environment.API_KEY_VALUE)
                                            .set(Constants.Q_START_DATE, beforeDate)
                                            .set(Constants.Q_END_DATE, currentDate)
                                            .set(Constants.Q_THUMBS, this.thumbValue)
                                          })
  }

  public getPictureById( pictureDateId: string ): Observable<PictureDto> {
    return this._http.get<PictureDto>(`${environment.API_URL}${Constants.APOD_ENDPOINT}`,
                                        {params: this.queryParams
                                          .set(Constants.API_KEY,environment.API_KEY_VALUE)
                                          .set(Constants.SINGLE_DATE, pictureDateId)
                                          .set(Constants.Q_THUMBS, this.thumbValue)
                                        });
  }

  public getPokemonList(): Observable<any> {
    return this._http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=905');
  }

  public getPokemonById(id: number): Observable<any>{
    return this._http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  public getPokemonByName(name: string): Observable<any>{
    return this._http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  }


}
