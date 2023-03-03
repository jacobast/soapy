import { Component } from '@angular/core';
import { Soap } from '../../Soap';
import { SOAPS } from '../../mock-soaps';

@Component({
  selector: 'app-saved-soaps',
  templateUrl: './saved-soaps.component.html',
  styleUrls: ['./saved-soaps.component.css']
})
export class SavedSoapsComponent {
  soaps: Soap[] = SOAPS;
  likedSoaps: Soap[] = this.soaps.filter(soap => soap.saved);
}
