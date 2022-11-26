import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PictureDto } from '@models/pictureDto.interface';
import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';
import { Constants } from '@constants/constants';
import { PokemonDto } from '../../models/pokemonDto.interface';
import { sprites } from '../../models/sprites.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public pokemonList: PokemonDto[] = [];
  public pokemonImg: sprites[] = [];
  public CONST = Constants;

  constructor(private _nasaApiService: NasaApiService,
              private _navigationService: NavigationService) { }

  ngOnInit(): void {
    let i: number;
    i=1;
    this._nasaApiService.getPokemonList()
      .subscribe((response) => {
        this.pokemonList = response.results;
        this.pokemonList.forEach((pokemon: PokemonDto) => {
          // console.log('POKEMON element: ', pokemon);
          this._nasaApiService.getPokemonById(i)
                // .subscribe((pokemonResponse: PokemonDto) => {
                //   console.log(pokemonResponse.name);
                //   console.log(pokemonResponse.sprites);
                // })
                .subscribe((response) => {
                  this.pokemonImg = response.sprites.front_default;
                  // console.log(response.name);
                  // console.log(response.sprites);
                })
                i++;
        });
      });


  }

}
