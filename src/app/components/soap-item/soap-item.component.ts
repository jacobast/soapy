import { Component, OnInit, Input } from '@angular/core';
import { Soap } from '../../Soap';

import { CartService } from '../../services/cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-soap-item',
  templateUrl: './soap-item.component.html',
  styleUrls: ['./soap-item.component.css']
})
export class SoapItemComponent implements OnInit {
  @Input() soap!: Soap

  constructor(private cartService: CartService, private firestore: AngularFirestore) { }

  ngOnInit(): void { }

  addToCart(soap: Soap) {
    this.cartService.addToCart(soap);
    console.log(`${soap.name} added to cart!`);
  }

  onLike(soap: Soap) {
    this.firestore.collection('soaps').doc(soap.id).update({
      saved: !soap.saved
    });
  }
}