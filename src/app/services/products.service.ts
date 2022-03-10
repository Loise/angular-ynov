import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return <Observable<Product[]>>this.http.get('http://localhost:3000/products')
    }

    getOneProduct(id: number) {
        return <Observable<Product>>this.http.get(`http://localhost:3000/products/${id}`)
    }

    onLikeProduct(product: Product): void {
        /*if (product.isLiked) {
            product.likes--;
        } else {
            product.likes++;
        }
        product.isLiked = !product.isLiked;*/
    }


}