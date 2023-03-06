import { Injectable } from '@angular/core';
import { Soap } from '../Soap';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Soap[] = [{
    color: "yellow",
    imgurl: "",
    name: "Test soap",
    saved: false,
    scent: "Wet Dog",
    shape: 'Dog',
    size: 'Average',
    price: 10,
}];

  addToCart(soap: Soap) {
    this.items.push(soap);
  }

  removeFromCart(soap: Soap) {
    // Find first soap with right name
    const index = this.items.findIndex(soap => soap.name);

    // Remove that soap
    if(index !== -1) {
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
}
