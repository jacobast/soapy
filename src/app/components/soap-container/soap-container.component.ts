import { Component } from '@angular/core';

import { Soap } from '../../Soap';
import { SOAPS } from '../../mock-soaps';

@Component({
  selector: 'app-soap-container',
  templateUrl: './soap-container.component.html',
  styleUrls: ['./soap-container.component.css']
})
export class SoapContainerComponent {
  soaps: Soap[] = SOAPS;

  // onClick(){

  // }
}
