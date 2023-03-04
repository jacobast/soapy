import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

// Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SoapItemComponent } from './components/soap-item/soap-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SoapContainerComponent } from './components/soap-container/soap-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SavedSoapsComponent } from './components/saved-soaps/saved-soaps.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomSoapComponent } from './components/custom-soap/custom-soap.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';




import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // Material Modules
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    //,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, 
    SoapItemComponent, 
    SoapContainerComponent, 
    SavedSoapsComponent, 
    ShoppingCartComponent, 
    CustomSoapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }