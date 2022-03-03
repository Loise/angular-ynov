import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'filterByName' })
export class FilterByNamePipe implements PipeTransform {
    transform(products: Product[], term: string) {
        if(term) {
            return products.filter((p) =>p.title.toLowerCase().includes(term.toLowerCase()))
        } else return products;
        
    }
}
