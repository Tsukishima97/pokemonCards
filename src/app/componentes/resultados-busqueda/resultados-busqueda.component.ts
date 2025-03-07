import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { PokeApiCallByRegion } from 'src/app/interfaces/poke-api-calls';
import { LoadingService } from 'src/app/services/loading.service';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';
import { MenuLateralService } from 'src/app/services/menu-lateral.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent {

  sidenavToggle: boolean = false;

  pokemonObj: any;
  pokemonByRegionObj!: PokeApiCallByRegion;

  // Variable para mostrar el spinner cuando se esten buscando pokemon
  isLoading: boolean = false;

  constructor(private pokeApiSrv: PokeApiService,private loadingSrv: LoadingService, private dialog: MatDialog, private sidenavSrv: MenuLateralService){

    //Me suscribo a la variable del servicio que comunicara el cambio que se ha hecho desde el componente del toolbar
    this.sidenavSrv.sidenavToggle$.subscribe( isOpened => 
      {
        this.sidenavToggle = isOpened;
      }
    )
  }
  
  ngOnInit(): void{

    this.pokeApiSrv.getDataBusqueda()
    .pipe(
      debounceTime(500) //Le meto retraso en el tiempo de busqueda para que se muestre el spinner ya que la API es muy rapida
    )
    .subscribe(
      data => {
        this.loadingSrv.stopLoading(); //Paro el spinner 
        this.pokemonObj = data;
        // console.log('Resultado componente resbusq: '+this.pokemonObj);
      }
    )

    this.pokeApiSrv.getDataSelect().subscribe(
      data => {
        this.pokemonByRegionObj = data;
        // console.log('resultado select (busq x region): '+this.pokemonByRegionObj)
      }
    )

    // Suscrito al booleano del que depende el ver o no el spinner
    this.loadingSrv.isLoading$.subscribe(
      data => {
        this.isLoading = data;
      }
    )

  }

  abrirUrlPkmn(url: string){
    if(url){
      window.open(url, '_blank')
    }
  }

  openDialog(pokemonNamePadre: string){
    // alert(pokemonName);

    const dialogRef = this.dialog.open(PokemonDialogComponent,{
      width: '30em',
      height: '20em',
    });  // Abrir el dialogo con el componente hijo

    dialogRef.componentInstance.pokemonName = pokemonNamePadre; //Aqui paso el valor del nombre del pokemon al dialog para la posterior llamada a la API

    //Evento para cuando se haya cerrado el dialog del pkmn
    // dialogRef.afterClosed().subscribe(
    //   data => {
    //     alert('dialog cerrau')
    //   }
    // )
  }
  
}
