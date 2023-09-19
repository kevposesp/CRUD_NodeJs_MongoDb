import { Component, OnInit, signal } from '@angular/core';
import { Product, ProductsService } from 'src/app/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products = signal<Product[]>([]);
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.get().subscribe({
      next: (data) => {
        this.products.set(data);
        console.log(data);
      },
    });
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe({
      next: (data) => {
        this.getProducts()
        console.log(data);
        
      },
      error: (e) => console.error(e)
    })
    console.log(id);
    
  }

  deleteAll(){
    this.productService.deleteProducts().subscribe({
      next: (data) => {
        console.log(data)        
      }
    })
  }
}
