import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  constructor(private productsService: ProductsService) { }

  onLike() {
    this.productsService.onLikeProduct(this.myProduct)
  }
}
