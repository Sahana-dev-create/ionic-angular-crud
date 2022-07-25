import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../services/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productList: any;

  product: any;

  getProducts: any;

  constructor(private fg: FormBuilder, private service: HttpserviceService, private http: HttpClient, private route: Router) {}

ngOnInit(): void {
  this.productList = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });
}

onSubmit(){
this.product = this.productList.value;
console.log(this.product);
 this.service.addProducts(this.product).subscribe((data)=>{
  console.log(data);
 });
}

getData(){
this.service.getAllProducts().subscribe({
 next: (data) => {
  this.getProducts = data.result;
  console.log('data', data.result);
// this.route.navigate(['/products']);
 }
});
}

}
