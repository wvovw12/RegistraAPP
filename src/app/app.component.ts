import { Component } from '@angular/core';
import { Itemsmenu } from './interfaces/itemsmenu';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items: Itemsmenu[]=[{
    path:'home',
    text:'Inicio',
    icon:'home'
  },
  {
<<<<<<< refs/remotes/origin/Diego
    path:'home',
    text:'Generar código QR',
    icon:'qr-code'
  },
=======
    path:'asignaturas',
    text:'Asignaturas',
    icon:'book'
  }
>>>>>>> Creacion de asignaturas y efectos de movimiento

];
  constructor() {
  }

}
