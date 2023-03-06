import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Soap } from '../../Soap';
import { CartService } from '../../services/cart.service';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
   constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) {}
}
