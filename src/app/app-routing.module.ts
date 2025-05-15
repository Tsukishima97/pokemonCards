import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadosBusquedaComponent } from './componentes/resultados-busqueda/resultados-busqueda.component';
import { PkmnFavoritosComponent } from './componentes/pkmn-favoritos/pkmn-favoritos.component';

const routes: Routes = [
  {path: 'resultadosBsqd', component: ResultadosBusquedaComponent},
  {path: 'favorites',component: PkmnFavoritosComponent},
  {path: '',redirectTo: 'resultadosBsqd', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
