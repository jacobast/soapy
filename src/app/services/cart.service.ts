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
    this.items = this.items.filter(item => item !== soap);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
