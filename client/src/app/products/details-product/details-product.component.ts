import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';
import { Product, ProductsService } from 'src/app/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  product= signal<Product | null>(null)!
  // products= signal<Product[]>([])

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ){}

  ngOnInit(): void {
    this.productService.getById(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
      next: (data) => {
        this.product.set(data)
      },
      error: (e) => console.error(e)
    })
  }
}
