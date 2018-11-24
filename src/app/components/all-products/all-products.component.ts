import { Component ,  OnInit,Inject} from '@angular/core';
import * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductsService } from "../../services/products.service";
import { ProductInfoService } from "../../services/product-info.service";
import { Lightbox } from 'ngx-lightbox';

export interface DialogData {
  quan:number;
}

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})

export class AllProductsComponent {
 	animal: string;
  	name: string;
  	cart:any[]=[];
  	product:any[]=[];
	_albums:any[]=[];
	productsFil:any[]=[];
	imagesG:any[]=[];
	menu:any={};
	quan: number = 3;
	private _album: Array<string> = [];
	constructor(public _ps:ProductsService, public dialog: MatDialog, private _lightbox:Lightbox,public _pi:ProductInfoService) {
		this.loadImages,open,close
	}
	open(index: number): void {
		this._lightbox.open(this._albums, index);
	}
	close(): void {
		this._lightbox.close();
	}
	openDialog(product): void {
		//console.log('Producto: '+product.productName);
		this.product=product;
		//console.log('Producto: '+this._pi.productName);
		//this.name=this._pi.productName;
		//console.log('Producto: '+this.name);
		let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      		width: '320px',
      		data: { 
      			quan:this.quan,
      			product: this.product 
      		}
    	});
		
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      this.product = result;
      this.cart.push(this.product);
      console.log('Array' +this.cart);
    });
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
 
 @Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../pop/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
 quan: number = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public _pi:ProductInfoService) { }
	changeAdd(): void{
		this.quan=this.quan+1;
		 console.log('Valor de quan: ' +this.quan);
	}
	changeRemove(): void{
		if (this.quan>0){
				this.quan=this.quan-1;
		 console.log('Valor de quan: ' +this.quan);
		}
	}
  onNoClick(): void {
    this.dialogRef.close();
  }

}


