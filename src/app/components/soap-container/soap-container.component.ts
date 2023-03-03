import { Component } from '@angular/core';

import { Soap } from '../../Soap';
import { SOAPS } from '../../mock-soaps';

// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-soap-container',
  templateUrl: './soap-container.component.html',
  styleUrls: ['./soap-container.component.css']
})
export class SoapContainerComponent {
  soaps: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.soaps = firestore.collection('soaps').valueChanges();
  }
  
}
