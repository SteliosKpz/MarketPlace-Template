import { Component, OnInit } from '@angular/core';

import { ShoppingCartService,product } from '../services/shopping-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newProducts:any=[
  {Id:'1',Name:'WAVE HOODIE',Img:'../assets/img/shirt-1.png',Size:'Large',Color:'Black',Price:29.99,Amount:1},
  {Id:'2',Name:'SIDE HUSTLE HOODIE',Img:'../assets/img/shirt-2.png',Size:'Large',Color:'White',Price:29.99,Amount:1},
  {Id:'3',Name:'LETTERING HOODIE',Img:'../assets/img/shirt-3.png',Size:'Large',Color:'White',Price:29.99,Amount:1}
]
  constructor(private cartService:ShoppingCartService) {

   }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  addProduct(product){
    this.cartService.addtoCart(product)

  }
  isMobile(){
    return screen.height>screen.width
  }
}
