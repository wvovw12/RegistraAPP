import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-passrecover',
  templateUrl: './passrecover.page.html',
  styleUrls: ['./passrecover.page.scss'],
})
export class PassrecoverPage implements OnInit {

  user={
    username:''
    };
  router: any;

  constructor(private menu: MenuController,private alertController:AlertController) {}

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.user);
    
      let navextras:NavigationExtras={
        state:{
          miusuario:this.user
        }
      
}
    
      console.log('todo mal!!!!');
      let mensaje='Se ha enviado un mensaje a su correo asociado de:';
      this.presentAlert(mensaje);
    


  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: 'Listo',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



  ionViewDidEnter(){

    this.menu.enable(false);
  }

  ionViewWillLeave(){

    this.menu.enable(true);
  }
}
