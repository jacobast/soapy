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
    this.items = this.items.filter(item => item !== soap);
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
