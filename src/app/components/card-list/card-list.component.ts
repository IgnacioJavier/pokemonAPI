import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '@constants/constants';
import { MediaType } from "@models/media-type.interface";
import { PokemonDto } from '../../models/pokemonDto.interface';
import { sprites } from '../../models/sprites.interface';
import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';
@Component({
  selector: 'app-card-picture',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit  {

  @Input('pokeData')
  public pokemon!:PokemonDto;

  public sprites!:sprites;

  public CONST = Constants;


  constructor(private _nasaApiService: NasaApiService,
    private _navigationService: NavigationService) { }

  ngOnInit(): void {this._nasaApiService.getPokemonByName(this.pokemon.name)
    // .subscribe((pokemonResponse: PokemonDto) => {
    //   console.log(pokemonResponse.name);
    //   console.log(pokemonResponse.sprites);
    // })
    .subscribe((response) => {
      this.sprites = response.sprites.front_default;
      // console.log(response.name);
      // console.log(response.sprites);
    })}



}
