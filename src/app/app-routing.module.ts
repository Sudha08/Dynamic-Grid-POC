import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { RspCompComponent } from './rsp-comp/rsp-comp.component';


const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'address', component: AddressComponent },
  { path: 'rsp', component: RspCompComponent },
  { path: '', redirectTo: '/person', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
