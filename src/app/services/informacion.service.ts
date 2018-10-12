import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
	info:any={};
	loaded:boolean=false;
  constructor(public http:Http) { 
  	this.loadInfo();
  
  	}
  	public loadInfo(){
			this.http.get("assets/data/info.pagina.json")
			.subscribe(data =>{
				this.loaded=true;
				this.info=data.json();
		})
  	}

  
}
