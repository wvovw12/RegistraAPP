import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    username:'',
    password:''
    };

  constructor(private router:Router,private alertController:AlertController, private menu:MenuController) {

  }

  ngOnInit() {

  }


   onSubmit(form){
    console.log(this.user);
    if (this.user.username==='Juan' && this.user.password==='12345')
    {
      let navextras:NavigationExtras={
        state:{
          miusuario:this.user
        }
      };

      console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
      this.router.navigate(['/home'],navextras);
    }
    else{
      console.log('todo mal!!!!');
      let mensaje='Reingrese usuario y/o password';
      this.presentAlert(mensaje);
      this.user.username = '';
      this.user.password ='';
    }


  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: 'Error al Ingresar',
      subHeader: 'Datos no válidos',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewDidEnter(){

    this.menu.enable(false, 'first');
  }

  ionViewWillLeave(){

    this.menu.enable(true, 'first');
  }

}
