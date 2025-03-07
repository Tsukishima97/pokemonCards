import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarPkmnComponent } from './componentes/tool-bar-pkmn/tool-bar-pkmn.component';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';
import { ResultadosBusquedaComponent } from './componentes/resultados-busqueda/resultados-busqueda.component';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog';
import { PokemonDialogComponent } from './componentes/pokemon-dialog/pokemon-dialog.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarPkmnComponent,
    ResultadosBusquedaComponent,
    PokemonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PokemonDialogComponent]
})
export class AppModule { }
