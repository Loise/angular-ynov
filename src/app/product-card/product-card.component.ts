import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() myProduct: Product;
  constructor() { }

  ngOnInit() {
    this.myProduct = new Product("Peluche Harry Potter",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_512x512/B2CD/",
      2300,
      0,
      false);
  }

  onLike() {
    if (this.myProduct.isLiked) {
      this.myProduct.likes--;
    } else {
      this.myProduct.likes++;
    }
    this.myProduct.isLiked = !this.myProduct.isLiked;
  }
}