import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }


   onSubmit(form){
    console.log(this.user);
    if (this.user.username!=='' && this.user.password!=='')
    {
      let navextras:NavigationExtras={
        state:{
          miusuario:this.user
        }
      };

      this.router.navigate(['/home'],navextras);
    }
    else{
      console.log('todo mal!!!!');
      let mensaje='Reingrese usuario y/o password';
      this.presentAlert(mensaje);
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

}
