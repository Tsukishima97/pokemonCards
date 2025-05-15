import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectRegion } from '../interfaces/select-region';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  private resultadoBusq: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private resultadoSelect: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  

  /**********Metodos el select de la region**********/

  // Metodo para obtener el dato buscado
  getDataSelect() {
    return this.resultadoSelect.asObservable();  // Devolvemos un Observable para que otros componentes se suscriban
  }

  // Metodo para setear el dato buscado
  setDataSelect(data: any) {
    this.resultadoSelect.next(data);  // Emitimos el nuevo valor a los suscriptores
  }

  // Llamada a la API para buscar pokemons por la region elegida en el select del toolBar
  getPokemonByRegion(region: SelectRegion){
    return this.http.get(`${this.apiUrl}`+'pokedex/'+region.value+'/')
  }

  
  /**********Metodos el buscador de pokemon**********/

  // Metodo para obtener el dato buscado
  getDataBusqueda() {
    return this.resultadoBusq.asObservable();  // Devolvemos un Observable para que otros componentes se suscriban
  }

  // Metodo para setear el dato buscado
  setDataBusqueda(data: any) {
    this.resultadoBusq.next(data);  // Emitimos el nuevo valor a los suscriptores
  }

  // Llamada a la API para buscar un pokemon por nombre
  getPokemonByName(pokemonName: string): Observable<any>{
    return this.http.get(`${this.apiUrl}`+`pokemon/`+pokemonName+`/`);
  }

  // Llamada para obtener un pokemon de la API pero devolviendo una promesa (usado en la vista de favoritos)
  getPokemonByNamePromise(pokemonName: string): Promise<any>{
    return firstValueFrom(this.http.get(`${this.apiUrl}`+`pokemon/`+pokemonName+`/`))
  }
}
