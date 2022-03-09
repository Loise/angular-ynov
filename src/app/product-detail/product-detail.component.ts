import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  myProduct!: Product;
  id: number;
  orientation: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id)
    });
  }

  ngOnInit() {
    this.myProduct = this.productsService.getOneProduct(this.id);
    this.orientation = "landscape";
  }
  onLike() {
    this.productsService.onLikeProduct(this.myProduct)
  }
}
