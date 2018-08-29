import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, ToastController, AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-tab-1',
  templateUrl: 'tab-1.html'
})
export class Tab1Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public events: Events
  ) { }

  ionViewDidEnter() {

  }

  ionViewDidLeave() {

  }

  callParentFunction() {
    this.events.publish("parentfunction", {}, Date.now());
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

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
