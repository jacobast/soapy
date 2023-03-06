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
    console.log(soap);
    console.log(soap.saved);
    console.log(`soaps/${soap.id}/saved`);
    // this.firestore.doc(`soaps/${soap.id}/saved`).update({
    //   saved: true
    // });
    // this.firestore.collection('soaps').doc(soap.id).collection('saved').doc('documentId').update({
    //   saved: true
    // });
    this.firestore.collection('soaps').doc(soap.id).update({
      saved: !soap.id
    });
    console.log(soap.saved);
    // this.soap.saved = !this.soap.saved;
  }

}