import { Component, OnInit, Input } from '@angular/core';
import { Soap } from '../../Soap';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-soap-item',
  templateUrl: './soap-item.component.html',
  styleUrls: ['./soap-item.component.css']
})
export class SoapItemComponent implements OnInit {
  @Input() soap!: Soap

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(soap: Soap) {
    this.cartService.addToCart(soap);
    console.log(`${soap.name} added to cart!`);
  }

  onLike() {
    this.soap.saved = !this.soap.saved;
  }


}