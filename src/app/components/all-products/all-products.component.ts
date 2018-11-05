import { Component ,  OnInit} from '@angular/core';
import * as $ from 'jquery';
import { ProductsService } from "../../services/products.service";
import { Lightbox } from 'ngx-lightbox';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})

export class AllProductsComponent {

	 _albums:any[]=[];
	productsFil:any[]=[];
	imagesG:any[]=[];
	menu:any={};
	 private _album: Array<string> = [];
	constructor(public _ps:ProductsService, private _lightbox:Lightbox) {
  		this.ngSort,this.send,this.loadImages,open,close

  	}
 
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }



	public loadImages(product)
	{
		this._albums=[];
		this._ps.imagesG=product.images;

		 for (var i = 0; i <product.images.length; i++) {
		      const src = "https://www.thetixsapp.com/web/"+product.images[i];
		      const caption = '';
		      const thumb = product.images[i];
		      const album = {
		         src: src,
		         caption: caption,
		         thumb: thumb
		      };

		    this._albums.push(album);
		 }
		 this._lightbox.open(this._albums, 0);
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
		this._ps.imagesG=[];
		this.productsFil=this._ps.products;	
		console.log(this._ps.products);	
 		$.getScript('assets/js/collage.js');
 		$.getScript('assets/js/scripts.js');
  	}
}	
 


