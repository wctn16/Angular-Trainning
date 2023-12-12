import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
