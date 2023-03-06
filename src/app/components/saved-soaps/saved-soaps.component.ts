import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Soap } from '../../Soap';
import { SoapContainerComponent } from '../soap-container/soap-container.component';

@Component({
  selector: 'app-saved-soaps',
  templateUrl: './saved-soaps.component.html',
  styleUrls: ['./saved-soaps.component.css']
})
export class SavedSoapsComponent {

  savedSoaps: Soap[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getSoaps().subscribe((soaps: Soap[]) => {
      this.savedSoaps = soaps.filter((soap: Soap) => soap.saved === true);
      console.log(this.savedSoaps);
    });
  }

  getSoaps(): Observable<Soap[]> {
    return this.firestore.collection('soaps').valueChanges().pipe(
      map((soaps: any[]) => {
        return soaps.map((soap: any) => {
          const { color, id, imgurl, name, saved, scent, shape, size, price } = soap;
          return { color, id, imgurl, name, saved, scent, shape, size, price } as Soap; // Cast the object as Soap
        });
      })
    );
  }
}
