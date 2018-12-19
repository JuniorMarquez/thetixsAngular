import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
	info:any={};
	loaded:boolean=false;
	car:any[]=[];
  constructor(public http:Http) { 
  	
  
  	}
  	public loadInfo(){  
	}
}