import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, private navCtrl: NavController, private storage:Storage) {

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
    buttons: [{text:'Si', handler: () =>  {
      this.storage.remove('Habilitado');
      this.navCtrl.navigateForward('login');}}, 'No']

  });
  await alert.present();

    const { role } = await alert.onDidDismiss();

  }

}
