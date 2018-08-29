import { Component, ViewChild } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, ToastController } from 'ionic-angular';

@Component({
  selector: 'modal-example',
  templateUrl: 'example-modal.html'
})
export class ExampleModal {

  @ViewChild('nameForm') nameForm;

  public model = {name: ""};

  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController
  ) { }

  backClicked() {
    this.viewCtrl.dismiss();
  }

  doneClicked() {
    if (this.nameForm && this.nameForm.valid) {
      this.dismissValid();
    }
    else {
      this.presentToast("Please enter a name");
    }
  }

  dismissValid() {
    this.viewCtrl.dismiss(this.model);
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
