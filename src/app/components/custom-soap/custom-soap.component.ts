import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-soap',
  templateUrl: './custom-soap.component.html',
  styleUrls: ['./custom-soap.component.css'],
})
export class CustomSoapComponent {
  name = new FormControl('');
}