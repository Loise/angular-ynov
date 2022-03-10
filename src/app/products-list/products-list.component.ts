import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  private productsObservable : Observable<Product[]> ; 
  loading: boolean = true;
  search: string = '';
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsObservable = this.productsService.getAllProducts()
  }
}