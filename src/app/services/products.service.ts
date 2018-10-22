import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	loadedProducts:boolean=false;
 	AllLoadedProducts:any={};
 	products:any[]=[];
  loadedCategorys:boolean=false;
  AllLoadedCategorys:any={};
  categorys:any[]=[];

 	constructor(public http:Http) { 
 		this.loadInfo2();  
  	}

  public loadInfo2(){

  	this.http.get("https://www.thetixsapp.com:1350/product")
    .subscribe(data =>{
  	  this.loadedProducts=true;
  	  this.AllLoadedProducts=data.json();
  	  this.products=this.AllLoadedProducts.results;   
      for (var i=0;i<this.products.length;i++){
        this.products[i].image="https://www.thetixsapp.com/web/"+this.products[i].images[0];
        if(this.products[i].images.length<2){
          this.products[i].image="https://www.thetixs.com/assets/images/logo/logo-black-color-1.png";
        }
        this.products[i].categoryAll=[];
        for (var j=0;j<this.products[i].category.length;j++){
          this.products[i].category[j]=this.products[i].category[j].replace(/\s/g,"_");
          this.products[i].categoryAll=this.products[i].categoryAll+" "+this.products[i].category[j];
        }
      }
    })
    this.http.get("https://www.thetixsapp.com:1350/category")
    .subscribe(data =>{
      this.loadedCategorys=true;
      this.AllLoadedCategorys=data.json();
      this.categorys=[];
      this.categorys=this.AllLoadedCategorys.results;
      for (var i = 0;i<this.categorys.length;i++){
        this.categorys[i].filter="."+this.categorys[i].name.replace(/\s/g,"_");;
      }
    })
  }
}
