import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from '../shared/list-products/list-products.component';
import { CardProductComponent } from '../shared/card-product/card-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateFormProductComponent } from '../shared/create-form-product/create-form-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    CardProductComponent,
    ProductsComponent,
    DetailsProductComponent,
    AddProductComponent,
    CreateFormProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
