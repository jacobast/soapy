import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

import { CartService } from '../../services/cart.service';
import { Soap } from '../../Soap';

// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-soap',
  templateUrl: './custom-soap.component.html',
  styleUrls: ['./custom-soap.component.css'],
})
export class CustomSoapComponent implements OnInit {
  durationInSeconds = 5;

  formoptions: Observable<any[]>;

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    shape: ['', Validators.required],
    scent: ['', Validators.required],
    size: ['', Validators.required],
  });

  ngOnInit() { }

  onSubmit(post: any) {
    const soap: Soap = {
      id: "1",
      color: post.color, 
      imgurl: "", 
      name: post.name, 
      saved: false,
      scent: post.scent,
      shape: post.shape,
      size: post.size,
      price: 50,
    };
    this.cartService.addToCart(soap);
    this.formGroup.reset();
  }

  constructor(firestore: AngularFirestore, private formBuilder: FormBuilder, private cartService: CartService, public snackBar: MatSnackBar) {
    this.formoptions = firestore.collection('formoptions').valueChanges();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 } 

}
