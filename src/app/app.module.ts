import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ServiceComponent } from './service/service.component';
import { SharedComponent } from './shared/shared.component';


@NgModule({
  declarations: [
    AppComponent, PatientInfoComponent, ServiceComponent, SharedComponent

  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
