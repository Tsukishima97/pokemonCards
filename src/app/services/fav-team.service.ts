import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavTeamService {

  constructor() { }

  private storageKey = 'favPkmn';

  //Devuelve la lista de favoritos guardados en el local storage
  getFavorites(): string[]{
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  //Para saber si un pokemon esta en la lista de añadidos
  isFavorite(name: string): boolean{
    return this.getFavorites().includes(name);
  }

  //Para añadir favorito a la lista
  addFavorite(pkmn: string): void{
    const favorites = this.getFavorites();

    if(favorites.includes(pkmn) === false){
      favorites.push(pkmn);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }

  }

  //Para quitar favorito a la lista
  removeFavorite(pkmn: string): void{
    let favorites = this.getFavorites();

    favorites = favorites.filter(name => name !== pkmn);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  // chooseFavoritePkmn(name: string): void{
  //   const favorites = this.getFavorites();
  //   const index = favorites.indexOf(name); //Guardo el indice del pkmn favorito

  //   if( index === -1){//Si es un -1 el indice significa que noe staba en la lista de favoritos
  //     favorites.push(name);
  //   }else{
  //     favorites.splice(index,1);
  //   }

  //   localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  // }


}
