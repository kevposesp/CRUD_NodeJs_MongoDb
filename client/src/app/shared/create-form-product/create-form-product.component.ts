import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core';

@Component({
  selector: 'app-create-form-product',
  templateUrl: './create-form-product.component.html',
  styleUrls: ['./create-form-product.component.scss'],
})
export class CreateFormProductComponent {
  formulario: FormGroup;
  update: boolean = false;

  @Input() set newProduct(product: Product) {
    if (product) {
      this.formulario.patchValue(product);
      this.update = true;
    }
  }

  constructor(private formbuilder: FormBuilder) {
    this.formulario = this.formbuilder.group({
      title: [''],
      description: [''],
      price: [''],
      imgs: [''],
    });
  }

  @Output() createProduct = new EventEmitter<any>();
  @Output() updateProduct = new EventEmitter<any>();

  election() {
    this.update ? this.updateEmit() : this.create();
  }
  create() {
    this.createProduct.emit(this.formulario.value);
  }

  updateEmit() {
    this.updateProduct.emit(this.formulario.value);
  }
}
