import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartAddSnackbarComponent } from '../cart-add-snackbar/cart-add-snackbar.component';

export interface product{
  Id:string
  Name:string
  Img:string
  Size:string
  Color:string
  Price:number
  Amount:number
}
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  Items=0
  total:number=0
  shoppingCart:product[]
  constructor(private _snackBar: MatSnackBar) {
    if(localStorage.getItem('shoppingCart')==null){
      this.shoppingCart=[]
    }
    else {
       this.shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'))
       this.shoppingCart.forEach(e=>{this.total=this.total+(e.Price*e.Amount);this.Items=this.Items+e.Amount})

    }
  }



  getCart(){
        return this.shoppingCart
  }

  addtoCart(product:product){
    this.Items=this.Items+product.Amount
    this.total=0
    let index=this.shoppingCart.map(e=>{return e.Id}).indexOf(product.Id)
    if(index==-1){
      this.shoppingCart.push(product)
    }
    else{
      this.shoppingCart[index].Amount++
    }
    this.shoppingCart.forEach(e=>{this.total=this.total+(e.Price*e.Amount)})
    localStorage.setItem('shoppingCart',JSON.stringify(this.shoppingCart))
    this._snackBar.openFromComponent(CartAddSnackbarComponent,{horizontalPosition:'end',duration:5000,data:product})
  }
  resetItems(){
    this.Items=0
  }
  removefromCart(product:product){
    this.Items--
    this.total=0
    let index=this.shoppingCart.map(e=>{return e.Id}).indexOf(product.Id)
    if(this.shoppingCart[index].Amount!=1){
      this.shoppingCart[index].Amount--
      localStorage.setItem('shoppingCart',JSON.stringify(this.shoppingCart))
    }
    else{
      this.shoppingCart.splice(index,1)
      localStorage.setItem('shoppingCart',JSON.stringify(this.shoppingCart))
    }
    this.shoppingCart.forEach(e=>{this.total=this.total+(e.Price*e.Amount)})
  }
}

