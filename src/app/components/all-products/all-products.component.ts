import { Component ,  OnInit} from '@angular/core';
import * as $ from 'jquery';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})

export class AllProductsComponent {
	productsFil:any[]=[];
	menu:any={};
	constructor(public _ps:ProductsService) {
  		this.ngSort,this.send
  	}
  	public send(producto){
  		alert(""+producto.productName);
  	}	
  	public ngSort(category){
	  	this.productsFil=[];
  		for (var i=0;i<this._ps.products.length;i++){
  			if (this._ps.products[i].category.includes(category))
  			{
  				this.productsFil.push(this._ps.products[i]);
  				console.log("agregado"+this._ps.products[i].productName);
  			}
  		}
	}
	ngOnInit(): void {
		this.productsFil=this._ps.products;	
		console.log(this._ps.products);	
 		$.getScript('assets/js/collage.js');
 		$.getScript('assets/js/scripts.js');
  	}
}	
 


