import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { PokeApiService } from '../../services/poke-api.service';
import { SelectRegion } from 'src/app/interfaces/select-region';
import { LoadingService } from 'src/app/services/loading.service';
import { MenuLateralService } from 'src/app/services/menu-lateral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar-pkmn',
  templateUrl: './tool-bar-pkmn.component.html',
  styleUrls: ['./tool-bar-pkmn.component.css']
})
export class ToolBarPkmnComponent {

  sidenavToggle: boolean = false;

  pokemonBuscado: any;
  searchedPokemon$ = new Subject<string>(); // Observable para manejar el termino de busqueda.
  
  resultRegionBuscada: any; 
  selectValues: SelectRegion[] = [
    {value: 'kanto', viewValue: 'Kanto'},
    {value: 'hoenn',viewValue: 'Hoenn'}
  ]
  selectedRegion: SelectRegion = this.selectValues[0];

  constructor(private pokeApiSrv: PokeApiService,private loadingSrv: LoadingService,private sidenavSrv: MenuLateralService,
              private router: Router,
  )
  {

  // Suscribirse al observable y hacer la busqueda cuando el valor cambie.
  this.searchedPokemon$
    .pipe(
      debounceTime(500), // Espera 500ms despues de la ultima escritura
      switchMap((searchedPokemon) => {
        loadingSrv.startLoading();
        return this.search(searchedPokemon); // Llama a la funcion de busqueda
      })
    )
    .subscribe(results => {
      console.log(results); // Aqui se pueden manejar los resultados de la busqueda.
    });

    // Llamada para que haga la busqueda de los pokemon de Kanto al iniciar la app
    this.onRegionChange();
  }

  
  goTo(url: string){
    if(this.sidenavToggle){
      this.sidenavToggle = !this.sidenavToggle;
      this.sidenavSrv.openSidenav(this.sidenavToggle);
    }
    this.router.navigate(['/'+url])
  }


  openSidenav(){
    this.sidenavSrv.openSidenav(!this.sidenavToggle);
    //Cambio el valor del booleano
    this.sidenavToggle = !this.sidenavToggle;
  }

  // Llamada a la funcion de busqueda
  search(searchedPokemon: string) {
    // Aqui puedes hacer una llamada a un servicio para obtener los resultados.
    // Por ahora, solo retorna los terminos de busqueda como ejemplo.
    return new Observable(observer => {

      this.pokeApiSrv.getPokemonByName(searchedPokemon).subscribe(
        {
           next: pokemonObj => {
            //Guardo el valor de la llamada a la API en una variable local
            this.pokemonBuscado = pokemonObj;
            //Seteo el valor de la busqueda en el observable compartido del servicio
            this.pokeApiSrv.setDataBusqueda(this.pokemonBuscado);

            // console.log(pokemonObj);
          },
          error: error => {
            console.error('Error al obtener datos', error);  // Manejo de errores
          }
        }
      );

      observer.next(`Resultados para: ${searchedPokemon}`);
      observer.complete();
    });
  }

  onSearch(event: any){
    this.searchedPokemon$.next(event.target.value); // Pasa el valor del input al observable.
  }

  onRegionChange(){
    if(this.selectedRegion.value !== ''){
      // console.log('a: '+this.selectedRegion.value)
      this.pokeApiSrv.getPokemonByRegion(this.selectedRegion).subscribe(
        resultadoRegion => {
          //Guardo el resultado de escoger una region en el select en una variable local por si puedo usarla en el futuro
          this.resultRegionBuscada = resultadoRegion;
          //Guardo en el observable compartido del servicio el resutlado de escoger una region
          this.pokeApiSrv.setDataSelect(resultadoRegion);

          // console.log(resultadoRegion)
      },
      error => {
        console.error('Error al buscar por region', error);
      }
      );
    }
  }
}
