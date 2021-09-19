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

];
  constructor() {
  }

}
