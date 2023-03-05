import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SavedSoapsComponent } from './components/saved-soaps/saved-soaps.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomSoapComponent } from './components/custom-soap/custom-soap.component';
import { SoapItemComponent } from './components/soap-item/soap-item.component';
import { SoapContainerComponent } from './components/soap-container/soap-container.component';


// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

// Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';




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
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
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