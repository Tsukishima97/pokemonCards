import { Component, Inject, Input } from '@angular/core';
import { PokeApiCallPkmnByName } from 'src/app/interfaces/poke-api-calls';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent {

  @Input() pokemonName!: string;

  pokemonInfoObj!: PokeApiCallPkmnByName;

  constructor(private pokeSrv: PokeApiService){
  }

  ngOnInit(){
    if(this.pokemonName){

      this.pokeSrv.getPokemonByName(this.pokemonName).subscribe(
        data => {
          this.pokemonInfoObj = data;
        }
      )
    }
  }
}
