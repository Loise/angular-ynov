import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  product!: Product;

  ngOnInit() {
    this.product = new Product(
      "Peluche Harry Potter",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_512x512/B2CD/",
      2300,
      0,
      false,
      ['XL']
    );
  }
}

