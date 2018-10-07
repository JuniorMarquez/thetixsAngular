import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
				

//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
