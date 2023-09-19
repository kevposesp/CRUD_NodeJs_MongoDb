import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
 @Input() value:any
 @Output() deleteProduct = new EventEmitter<string>();

 stop(event:Event){
  event.stopPropagation()
 }

 deleteOne(id:string){
  this.deleteProduct.emit(id)  
 }

}

