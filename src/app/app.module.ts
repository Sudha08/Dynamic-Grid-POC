import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { RspCompComponent } from './rsp-comp/rsp-comp.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminCreatePlanComponent } from './admin-create-plan/admin-create-plan.component';
import { AdminCreateTemplateComponent } from './admin-create-template/admin-create-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    PersonComponent,
    AddressComponent,
    RspCompComponent,
    HeaderComponent,
    SideNavComponent,
    AdminCreatePlanComponent,
    AdminCreateTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
