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

  // soaps: Soap[] = [];
  // soaps: Observable<any[]>;

  // constructor(private soapConatainer: SoapContainerComponent) {
  //   this.soaps = soapConatainer.soaps;

  // }

  savedSoaps: Soap[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getSoaps().subscribe((soaps: Soap[]) => {
      this.savedSoaps = soaps.filter((soap: Soap) => soap.saved === true);
    });
  }

  getSoaps(): Observable<Soap[]> {
    return this.firestore.collection('soaps').valueChanges().pipe(
      map((soaps: any[]) => {
        return soaps.map((soap: any) => {
          const { color, imgurl, name, saved, scent, shape, size, price } = soap;
          return { color, imgurl, name, saved, scent, shape, size, price } as Soap; // Cast the object as Soap
        });
      })
    );
  }

  // savedSoaps: Soap[] = [];

  // constructor(private soapContainer: SoapContainerComponent) { }

  // ngOnInit(): void {
  //   this.getSoaps().subscribe((soaps: Soap[]) => {
  //     this.savedSoaps = soaps.filter((soap: Soap) => soap.saved === true);
  //   });
  // }

  // getSoaps(): Observable<Soap[]> {
  //   return this.soapContainer.soaps.
  //     map((soaps: any[]) => {
  //       return soaps.map((soap: any) => {
  //         const { color, imgurl, name, saved, scent, shape, size, price } = soap;
  //         return { color, imgurl, name, saved, scent, shape, size, price } as Soap; // Cast the object as Soap
  //       });
  //     })
  // }


}
