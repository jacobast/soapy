import { Component } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Soapy';

  soaps: Observable<any[]>;
  formoptions: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.soaps = firestore.collection('soaps').valueChanges();
    this.formoptions = firestore.collection('formoptions').valueChanges();
  }

  showFiller = false;
}