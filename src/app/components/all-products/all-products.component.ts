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
		this.loadImages,open,close
	}
	open(index: number): void {
		this._lightbox.open(this._albums, index);
	}
	close(): void {
		this._lightbox.close();
	}
	public loadImages(product){
		this._albums=[];
		this._ps.imagesG=product.imagesG;
		for (var i = 0; i <product.images.length; i++) {
	    	const src = product.imagesG[i];
	    	const caption = '';
	    	const thumb = product.imagesG[i];
	    	const album = {
	         src: src,
	         caption: caption,
	         thumb: thumb
	    	};
	    	this._albums.push(album);
		}
		this._lightbox.open(this._albums, 0);
	}
   	ngOnInit(): void {
		$.getScript('assets/js/collage.js');
 		$.getScript('assets/js/scripts.js');
		this._ps.imagesG=[];
		this.productsFil=this._ps.products;			
  	}
}	
 


