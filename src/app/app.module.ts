import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './components/api/api.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { PagLoginComponent } from './pag-login/pag-login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './errorPage/error-page.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogMenuLateralComponent } from './dialog-menu-lateral/dialog-menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    PagLoginComponent,
    DashboardComponent,
    ErrorPageComponent,
    LogoutDialogComponent,
    NavbarComponent,
    DialogMenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
