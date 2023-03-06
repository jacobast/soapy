import { Injectable } from '@angular/core';
import { Soap } from '../Soap';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Soap[] = [];

  addToCart(soap: Soap) {
    this.items.push(soap);
  }

  removeFromCart(soap: Soap) {
    // Find first soap with right name
    const index = this.items.findIndex(item => item.name == soap.name);

    // Remove that soap
    if (index !== -1) {
      this.items.splice(index, 1);
    }

    /* This makes sure it only deletes one of the soaps when you 
    press remove on a soap that there exists more than one of 
    in the shopping cart */

    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getCartNbr() {
    return this.items.length;
  }
}
