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

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    PersonComponent,
    AddressComponent,
    RspCompComponent
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
