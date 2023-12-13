import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxDateBoxModule, DxFormModule,DxBulletModule,DxTemplateModule, DxNumberBoxModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule,DxDataGridModule } from 'devextreme-angular';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { DxHtmlEditorModule, DxPopupModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DataBindingComponent } from './page/data-binding/data-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FirstPageComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxTextAreaModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    HttpClientModule,
    DxHtmlEditorModule,
    DxPopupModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
