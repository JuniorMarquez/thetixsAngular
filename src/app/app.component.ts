import { Component } from '@angular/core';
import { InformacionService } from "./services/informacion.service";
import { ProductsService } from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor ( public _is:InformacionService, public _ps:ProductsService){

 }
}
