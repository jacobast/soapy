import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoapContainerComponent } from './components/soap-container/soap-container.component';
import { CustomSoapComponent } from './components/custom-soap/custom-soap.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SavedSoapsComponent } from './components/saved-soaps/saved-soaps.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: SoapContainerComponent },
  { path: 'CustomSoap', component: CustomSoapComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'SavedSoaps', component: SavedSoapsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
