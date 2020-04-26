import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';
import { DscribeModule } from 'dscribe';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DscribeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
