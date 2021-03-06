import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Rutas
import { app_routing } from "./app.routes";				

//services
import {InformacionService} from './services/informacion.service';
import {ProductsService} from './services/products.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent,DialogOverviewExampleDialog } from './components/all-products/all-products.component';
import { CollageComponent } from './components/collage/collage.component';
import { PatrocinadosComponent } from './components/patrocinados/patrocinados.component';
import { AboutComponent } from './components/about/about.component';

import { ContactComponent } from './components/contact/contact.component';
import { TixComponent } from './components/tix/tix.component';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { Component, Inject} from '@angular/core';
import { PfooterComponent } from './components/pfooter/pfooter.component';


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
     DialogOverviewExampleDialog,
     PfooterComponent
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
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[ DialogOverviewExampleDialog],
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
