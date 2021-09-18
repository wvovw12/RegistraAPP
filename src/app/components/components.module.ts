import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { LogheaderComponent } from './logheader/logheader.component';



@NgModule({
  declarations: [MainfooterComponent,MainheaderComponent,LogheaderComponent,],
  exports: [MainfooterComponent,MainheaderComponent,LogheaderComponent,],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
