import { Component } from '@angular/core';
import { InformacionService } from "./services/informacion.service";
import { ProductsService } from "./services/products.service";
import { ProductInfoService } from "./services/product-info.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor ( public _is:InformacionService, public _ps:ProductsService, public _pi:ProductInfoService){

 }
}
