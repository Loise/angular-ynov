import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    constructor(private http: HttpClient) { }

    getAllOrders(): Observable<any[]> {
        return <Observable<any[]>>this.http.get('http://localhost:3000/orders')
    }

    getOneOrder(id: number): Observable<any> {
        return <Observable<any>>this.http.get(`http://localhost:3000/orders/${id}`)
    }

    onOrder(contact: any): Observable<string>  {
        return <Observable<string>> this.http.post(`http://localhost:3000/orders/`, {contact})
    }
}