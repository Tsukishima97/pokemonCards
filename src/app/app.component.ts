import { Component } from '@angular/core';
import { basicObj } from './interfaces/poke-api-calls';
import { MenuLateralService } from './services/menu-lateral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pkmnCards';

  botoneraSidenavList: basicObj[] = [{name: 'Inicio',url: 'resultadosBsqd'},{name: 'Favoritos',url: 'favorites'}];
  sidenavToggle: boolean = false;
  
  constructor(private sidenavSrv: MenuLateralService,private router: Router){
     //Me suscribo a la variable del servicio que comunicara el cambio que se ha hecho desde el componente del toolbar
     this.sidenavSrv.sidenavToggle$.subscribe( isOpened => 
      {
        this.sidenavToggle = isOpened;
      }
    )
  }

  

  goTo(url: string){
    this.sidenavToggle = !this.sidenavToggle;
    this.sidenavSrv.openSidenav(this.sidenavToggle);
    this.router.navigate(['/'+url])
  }


}
