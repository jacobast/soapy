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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // Material Modules
    MatButtonModule,
    MatSidenavModule
  ],
  declarations: [ AppComponent, SoapItemComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}