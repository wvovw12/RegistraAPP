import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-passrecover',
  templateUrl: './passrecover.page.html',
  styleUrls: ['./passrecover.page.scss'],
})
export class PassrecoverPage implements OnInit {

  constructor(private menu: MenuController) {}

  ngOnInit() {
  }

  ionViewDidEnter(){

    this.menu.enable(false);
  }

  ionViewWillLeave(){

    this.menu.enable(true);
  }
}
