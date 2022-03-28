import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  amount=1
  product
  Products:any=[
    {Id:'1',Name:'WAVE HOODIE',Img:'../assets/img/shirt-1.png',Size:'Large',Color:'Black',Price:29.99,Amount:1},
    {Id:'2',Name:'SIDE HUSTLE HOODIE',Img:'../assets/img/shirt-2.png',Size:'Large',Color:'White',Price:29.99,Amount:1},
    {Id:'3',Name:'LETTERING HOODIE',Img:'../assets/img/shirt-3.png',Size:'Large',Color:'White',Price:29.99,Amount:1}
  ]
  constructor(private router:ActivatedRoute,private cart:ShoppingCartService) { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this.router.queryParams.subscribe(params=>{

         this.product=parseInt(params.id)-1

    })
  }

addQuantity(){
//this.Products[parseInt(id)].Amount++
this.amount++
}
removeQuantity(){
if(this.amount>1){
  this.amount--
}  }

addtoCart(id){
  this.Products[parseInt(id)-1].Amount=this.amount
  this.cart.addtoCart(this.Products[parseInt(id)-1])

}

}
