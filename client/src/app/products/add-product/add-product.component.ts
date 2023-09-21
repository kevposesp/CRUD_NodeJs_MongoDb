import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  id = '';
  update: boolean = false;
  product!: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    if (this.id) {
      this.update = true;
      this.getProduct(this.id);
    }
  }

  createProduct(product: Product) {
    this.productService.set(product).subscribe({
      next: (data) => {
        this.router.navigate(['/products']);
      },
    });
  }

  getProduct(id: string) {
    this.productService.getById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (e) => console.error(e),
    });
  }

  updateProduct(data: any) {
    data.id = this.product.slug;

    this.productService.updateProd(data).subscribe({
      next: (res) => {
        this.router.navigate(['/products']);
      },
    });
  }
}
