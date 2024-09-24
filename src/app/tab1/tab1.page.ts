import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public shoppingList: ShoppingItemsService, private alertController: AlertController) {}

  async removeItem(item) {

    const alert = await this.alertController.create({
      header: 'Eliminar artículo',
      message: `¿Desea eliminar el artículo ${item}?`,
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.shoppingList.removeItem(item);
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }
}  