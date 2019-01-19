import { Component,OnInit,NgModule,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsService } from "../../services/products.service";
import { ProductInfoService } from "../../services/product-info.service";
import { CarService } from "../../services/car.service";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
 
})



export class HeaderComponent  implements OnInit {

 


  isLinear = false;
  quanCar:number;
  car:any[]=[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,public _car:CarService) {
    this.saludo
  }
  saludo(): void {
    alert("hola");

}  
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({

      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}