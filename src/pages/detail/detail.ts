import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public character;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = this.navParams.get('character');
  }

  ionViewDidLoad() {
  }

}
