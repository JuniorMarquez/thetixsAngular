import { Component , ElementRef, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html'
})
export class AllProductsComponent implements OnInit {
  constructor(private element: ElementRef) { }
  ngOnInit(): void {
 	$.getScript('assets/js/collage.js');
 	$.getScript('assets/js/scripts.js');
  }
}	
 


