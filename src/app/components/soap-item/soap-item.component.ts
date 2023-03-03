import { Component, OnInit, Input } from '@angular/core';
import { Soap } from '../../Soap';

@Component({
  selector: 'app-soap-item',
  templateUrl: './soap-item.component.html',
  styleUrls: ['./soap-item.component.css']
})
export class SoapItemComponent implements OnInit {
  @Input() soap!: Soap

  constructor() {

  }

  onLike() {
    this.soap.saved = !this.soap.saved;
  }

  ngOnInit(): void { }

}