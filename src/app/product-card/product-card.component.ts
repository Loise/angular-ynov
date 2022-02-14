import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  likes: number;
  constructor() { }

  ngOnInit() {
    this.title = "Peluche Harry Potter",
    this.description = "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
    this.imageUrl = "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_512x512/B2CD/",
    this.price = 2300
    this.likes = 0;
  }

}
