import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Rutas
import { app_routing } from "./app.routes";				

//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CollageComponent } from './components/collage/collage.component';
import { PatrocinadosComponent } from './components/patrocinados/patrocinados.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TixComponent } from './components/tix/tix.component';


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
    TixComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  	MaterialModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
