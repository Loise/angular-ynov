import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any) {
        let desc = !(order && order === 'asc');
        if(!products) return products;
        return products.sort((a, b) => {
            if (desc) return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
            else return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
        });
    }
}
