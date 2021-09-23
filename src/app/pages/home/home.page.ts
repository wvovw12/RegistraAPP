import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario='';

  constructor(private activeroute: ActivatedRoute,private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nombreUsuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
        console.log(this.nombreUsuario);
      }
});
}

openMenuEnd() {
  console.log(this.openMenuEnd);
  this.menu.open('custom');
}

}
