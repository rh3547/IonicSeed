import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, Events } from 'ionic-angular';

import {
  Tab1Page,
  Tab2Page,
  Tab3Page
} from '@app/pages/general';

import { AuthService } from '@app/services';

@Component({
  selector: 'page-tabs-main',
  templateUrl: 'tabs-main.html'
})
export class TabsMainPage {

  // Tab pages
  public tab1 = Tab1Page;
  public tab2 = Tab2Page;
  public tab3 = Tab3Page;
  public tabParams: any;


  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private authService: AuthService,
    public events: Events
  ) {
    // If a message was sent with nav params, show it.
    let message = navParams.get("message");
    if (message) {
      this.presentToast(message);
    }
  }

  ionViewDidEnter() {
    // Setup events to show edit pages from child tabs
    this.events.subscribe('parentfunction', () => {
      this.tabFunction();
    });
  }

  ionViewDidLeave() {
    this.events.unsubscribe("parentfunction");
  }

  tabFunction() {
    console.log("Parent tab function called");
  }

  logout() {
    this.authService.logout();
  }

  // Present a toast message to the user
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: ''
    });

    toast.onDidDismiss(() => {

    });

    toast.present();
  }
}
