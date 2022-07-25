import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addProducts(products){
    console.log('productservice', products);
   return this.http.post<any>('http://localhost:4545/product/addProduct', products,this.httpOptions);
  }

  getAllProducts(){
    return this.http.get<any>('http://localhost:4545/product/getallproducts');
  }

}
