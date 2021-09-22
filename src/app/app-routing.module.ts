import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'passrecover',
    loadChildren: () => import('./pages/passrecover/passrecover.module').then( m => m.PassrecoverPageModule)
  },  {
    path: 'pages',
    loadChildren: () => import('./qrgenerator/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'qrgenerator',
    loadChildren: () => import('./pages/qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
