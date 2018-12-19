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
  templateUrl: './header.component.html'
 
})
export class HeaderComponent  implements OnInit {
  isLinear = false;
  car:any[]=[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,public _car:CarService) {
    this.test();
  }
    public test(){
      this.car=this._car.car;
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