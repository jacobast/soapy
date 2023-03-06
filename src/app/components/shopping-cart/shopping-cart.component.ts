import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Soap } from '../../Soap';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Soap[] = [];
  post: any = '';
  totalPrice: number = 0;

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.calcTotal();
  }

  calcTotal() {
    this.totalPrice = 0;
    for(let item of this.cartItems) {
      this.totalPrice += item.price;
    }
  }

  removeFromCart(item: Soap) {
    this.cartItems = this.cartService.removeFromCart(item);
    this.calcTotal();
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
    this.calcTotal();
  }

  onSubmit(post: any) {
    this.post = post;
    this.formGroup.reset();
    this.clearCart();
  }

  openDialog() {
    //this.dialog.open(CartDialogComponent);
    console.log(this.cartItems);
    const dialogRef: MatDialogRef<CartDialogComponent> = this.dialog.open(CartDialogComponent, {
      data: this.cartItems
    });
  }

}
