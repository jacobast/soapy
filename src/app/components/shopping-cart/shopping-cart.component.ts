import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Soap } from '../../Soap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Soap[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item: Soap) {
    this.cartService.removeFromCart(item);
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }

}
