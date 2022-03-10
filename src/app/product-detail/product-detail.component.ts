import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  private myProductObservable : Observable<Product> ; 
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
    this.myProductObservable = this.productsService.getOneProduct(this.id);
    this.orientation = "landscape";
  }
  onLike() {
    console.log("onLike")
    this.myProductObservable.subscribe((p:Product) => {
      let test = this.productsService.onLikeProduct(p);
      console.log(test);
    }
    )
    this.myProductObservable = this.productsService.getOneProduct(this.id);
  }
}
