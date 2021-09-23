import { Component } from '@angular/core';
import { Itemsmenu } from './interfaces/itemsmenu';
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

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

    path:'home',
    text:'Generar código QR',
    icon:'qr-code'
  },
  {
    path:'asignaturas',
    text:'Asignaturas',
    icon:'book'
  }

];
  constructor(private alertController: AlertController) {
  }


  exitConfirm() {
    let mensaje= '¿Está seguro de que desea salir?';
    this.presentAlert(mensaje);

  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: '',
      subHeader: 'Confirmar',
      message: mensaje,
      buttons: ['Si', 'No']

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

}
