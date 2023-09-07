import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { RspCompComponent } from './rsp-comp/rsp-comp.component';
import { AdminCreatePlanComponent } from './admin-create-plan/admin-create-plan.component';
import { AdminCreateTemplateComponent } from './admin-create-template/admin-create-template.component';


const routes: Routes = [
  { path: 'plan2', component: PersonComponent },
  { path: 'plan3', component: AddressComponent },
  { path: 'plan1', component: RspCompComponent },
  { path: 'adminCreatePlan', component: AdminCreatePlanComponent },
  { path: 'adminCreateTemplate', component: AdminCreateTemplateComponent },
  { path: '', redirectTo: '/plan1', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
