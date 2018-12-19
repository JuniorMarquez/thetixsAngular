import { Component ,  OnInit,Inject} from '@angular/core';
import * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductsService } from "../../services/products.service";
import { ProductInfoService } from "../../services/product-info.service";
import { CarService } from "../../services/car.service";
import { Lightbox } from 'ngx-lightbox';

export interface DialogData {
  quan:number;
  car:any[];
  product:{
  	productName:string,
  	itemsPrices:{
  		label:string;
  		price:number;
  	}
  	quan:{};
  }
}

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})

export class AllProductsComponent {
  	name: string;
  	car:any[]=[];
  	tix:any[]=[];
  	product:any[]=[];
	_albums:any[]=[];
	productsFil:any[]=[];
	imagesG:any[]=[];
	menu:any={};
	quan: number = 3;
	private _album: Array<string> = [];
	constructor(public _ps:ProductsService, public dialog: MatDialog, private _lightbox:Lightbox,public _pi:ProductInfoService,public _ca:CarService) {
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
		let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      		width: '320px',
      		data: { 
      			quan:this.quan,
      			car:this.car,
      			product: this.product 
      		}
    	});
	    dialogRef.afterClosed().subscribe(result => {
      		this.product = result;
      		//console.log('The dialog was closed'+this.product]);
      		this._ca.car=this.car;
      		//console.log("Producto: "+this.car[0].productName+" 1er label : "+this.car[0].itemsPrices[0].label+" 1er price: "+this.car[0].quan[0]);
      		
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
	public filter(){
		//alert("tamano: "+this._ps.products.length);
		 for (var i=0;i<this._ps.products.length;i++){
        if(this._ps.products[i].status==true){
          this.productsFil.push(this._ps.products[i]);
        }
      }
	}
   	ngOnInit(): void {
   		//this.filter();
		$.getScript('assets/js/collage.js');
 		$.getScript('assets/js/scripts.js');
		this._ps.imagesG=[];

		this.product=[]	;	
  	}
}	
 
 @Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../pop/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
 	quan: any = {};
	tix:any[]=[];
  	constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData, public _pi:ProductInfoService) {
  		this.ini();
    }
     public ini(){
     	for(var i = 0; i <20; i++){
     		this.quan[i]=0;
     	} 
     	
    }
	changeAdd(item,i): void{
		this.quan[i]=this.quan[i]+1;
		// console.log( "indice: "+i +" Valor:" +this.quan[i]);
	}
	changeRemove(item,i): void{
		if (this.quan[i]>0){
				this.quan[i]=this.quan[i]-1;
		// console.log( "indice: "+i +" Valor:" +this.quan[i]);
		}
	}
  	onNoClick(): void {
  		
    	this.dialogRef.close();
  	}
   ok(): void {
   	this.data.product.quan=this.quan;
   	this.data.car.push(this.data.product);
   	this.dialogRef.close();
  }

}
