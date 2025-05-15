import { Component } from '@angular/core';
import { crearPokeApiCallByRegionDefault, PokeApiCallByRegion, PokeApiCallPkmnByName } from 'src/app/interfaces/poke-api-calls';
import { FavTeamService } from 'src/app/services/fav-team.service';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pkmn-favoritos',
  templateUrl: './pkmn-favoritos.component.html',
  styleUrls: ['./pkmn-favoritos.component.css']
})
export class PkmnFavoritosComponent {

  teamFavorites: any[] = [];
  pokemonByRegionObj: PokeApiCallByRegion = crearPokeApiCallByRegionDefault();

  constructor(private favTeamSrv: FavTeamService, private pokeApiSrv: PokeApiService){
    
  }

  async ngOnInit() {

    this.cargarFavoritos();

    this.pokeApiSrv.getDataSelect().subscribe(
      data => {
        this.pokemonByRegionObj = data;
        // console.log(this.pokemonByRegionObj);
      }
    )

  }

  //Funcion asincronica para obtener los datos de los pokemon 
  async cargarFavoritos(){
    const teamNames = this.favTeamSrv.getFavorites();
    const favPkmnObj = teamNames.map(name => this.pokeApiSrv.getPokemonByNamePromise(name));

    //con Promise.all se hacen todas las llamadas en paralelo
    this.teamFavorites = await Promise.all(favPkmnObj);
    // console.log(this.teamFavorites);
  }

  removePkmn(pokemonName: string): void {
    this.favTeamSrv.removeFavorite(pokemonName);
    this.cargarFavoritos();
  }

  addPkmn(pokemonName: string): void{
    this.favTeamSrv.addFavorite(pokemonName);
    this.cargarFavoritos();
  }

  isFav(pokemonName: string): boolean{
    return this.favTeamSrv.isFavorite(pokemonName);
  }
}
