import { Component, OnInit, signal } from '@angular/core';
import { Product, ProductsService } from 'src/app/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products = signal<Product[]>([]);
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.productService.get().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (e) => console.error(e)
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: (data) => {
        this.getProducts()
      },
      error: (e) => console.error(e)
    })
  }

  deleteAll() {
    this.productService.deleteProducts().subscribe({
      next: (data) => {
        this.getProducts()
      },
      error: (e) => console.error(e)
    })
  }
}
