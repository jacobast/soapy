import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Soap } from '../../Soap';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Soap[] = [];
  post: any = '';

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item: Soap) {
    this.cartItems = this.cartService.removeFromCart(item);
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }

  onSubmit(post: any) {
    this.post = post;
  }

}
