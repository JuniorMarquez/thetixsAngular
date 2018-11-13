import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Rutas
import { app_routing } from "./app.routes";				

//services
import {InformacionService} from './services/informacion.service';
import {ProductsService} from './services/products.service';
//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CollageComponent } from './components/collage/collage.component';
import { PatrocinadosComponent } from './components/patrocinados/patrocinados.component';
import { AboutComponent } from './components/about/about.component';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './components/pop/dialog-overview-example';

import { ContactComponent } from './components/contact/contact.component';
import { TixComponent } from './components/tix/tix.component';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';
import { Component, Inject} from '@angular/core';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllProductsComponent,
    CollageComponent,
    PatrocinadosComponent,
    AboutComponent,
    ContactComponent,
    TixComponent,
    DialogOverviewExample, DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  	//MaterialModule,
    HttpModule,
    app_routing,
    LightboxModule,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule
  ],
 entryComponents:[DialogOverviewExample, DialogOverviewExampleDialog],
  providers: [
    InformacionService,
    ProductsService,
    LightboxModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
