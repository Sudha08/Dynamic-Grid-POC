import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'address', component: AddressComponent },
  { path: '', redirectTo: '/person', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
