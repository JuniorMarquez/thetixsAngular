import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	loadedProducts:boolean=false;
 	AllLoadedProducts:any[][]=[[],[]];
 	products:any[]=[];
 	constructor(public http:Http) { 
 		this.loadInfo2();
  
  	}
  	  	public loadInfo2(){
  			this.http.get("https://www.thetixsapp.com:1350/product")
			.subscribe(data =>{
				this.loadedProducts=true;
				this.AllLoadedProducts=data.json();
				this.products=this.AllLoadedProducts.results;
  		})
  	}

  
}
