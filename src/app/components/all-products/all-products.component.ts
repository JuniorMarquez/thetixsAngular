import { Component ,  OnInit} from '@angular/core';
import * as $ from 'jquery';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})

export class AllProductsComponent {

  constructor(public _ps:ProductsService) { }
  	
	ngOnInit(): void {
		console.log(this._ps.products);	
 	$.getScript('assets/js/collage.js');
 	$.getScript('assets/js/scripts.js');
  }
}	
 


