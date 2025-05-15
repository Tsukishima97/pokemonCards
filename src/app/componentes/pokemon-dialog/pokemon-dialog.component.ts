import { Component, Inject, Input } from '@angular/core';
import { PokeApiCallPkmnByName } from 'src/app/interfaces/poke-api-calls';
import { FavTeamService } from 'src/app/services/fav-team.service';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent {

  @Input() pokemonName!: string;

  pokemonInfoObj!: PokeApiCallPkmnByName;
  stringUrlAudio: string = "";

  constructor(private pokeSrv: PokeApiService,private favesSrv: FavTeamService){
  }

  ngOnInit(){
    if(this.pokemonName){

      this.pokeSrv.getPokemonByName(this.pokemonName).subscribe(
        data => {
          this.pokemonInfoObj = data;
          this.reproducirLlanto();
        }
      )
    }
  }

  isFav(): boolean{
    return this.favesSrv.isFavorite(this.pokemonName);
  }

  // AQUI TENDRE QUE PASAR EL OBJETO DEL POKEMON FAV O HACER QUE EN LA VISTA DE FAVS SE LLAMEN A LOS POKEMON FAV Y OBTENER ASI SUS DETALLES
  addRemoveFav(): void{
    if(this.isFav()){//Quitamos el pokemon de la lista en caso de ser favorito

      this.favesSrv.removeFavorite(this.pokemonName);
    }else{//En caso de no ser favorito se añade el pokemon a la lista

      this.favesSrv.addFavorite(this.pokemonName);
    }
  }

  reproducirLlanto(): void{

    if(this.pokemonInfoObj.cries && this.pokemonInfoObj.cries.latest !== ""){
      this.stringUrlAudio = this.pokemonInfoObj.cries.latest;
    }else{
      this.stringUrlAudio = this.pokemonInfoObj.cries.legacy;
    }
    
    const audio = new Audio(this.stringUrlAudio);
    audio.play();
  }
}
