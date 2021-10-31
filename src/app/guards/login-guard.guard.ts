import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidacionUsuario } from '../interfaces/validacion-usuario';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardGuard implements CanActivate {

  logeado:ValidacionUsuario={
  desc:'Habilitado',
  status: null
  };

  constructor(private storage:Storage) {


  };

  async validar() {
    let log = await this.storage.get('Habilitado');
    if(log.status===1) {
      console.log('esta validado el user');
      return true;
    }

  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
