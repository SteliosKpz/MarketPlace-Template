import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
export interface filter{
  type:string
  value:string
  checked:any
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  newProducts:any=[
    {Id:'1',Name:'WAVE HOODIE',Img:'../assets/img/shirt-1.png',Size:'Large',Color:'Black',Price:29.99,Amount:1},
    {Id:'2',Name:'SIDE HUSTLE HOODIE',Img:'../assets/img/shirt-2.png',Size:'Large',Color:'White',Price:29.99,Amount:1},
    {Id:'3',Name:'LETTERING HOODIE',Img:'../assets/img/shirt-3.png',Size:'Large',Color:'White',Price:29.99,Amount:1}
  ]
  filters:filter[]=[
  {type:'for',value:'men',checked:false},
  {type:'for',value:'women',checked:false},
  {type:'clothing',value:'hoodie',checked:false},
  {type:'clothing',value:'fleece',checked:false},
  {type:'clothing',value:'tshirt',checked:false},
  {type:'clothing',value:'longsleeve',checked:false},
  {type:'brand',value:'russel',checked:false},
  {type:'brand',value:'fruitoftheloom',checked:false},
]

  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  addProduct(product){
    this.cartService.addtoCart(product)

  }
  filterchange(event,value){
 this.filters[this.filters.map(e=>{return e.value}).indexOf(value)].checked=event.checked

  }

triggerfilterMenu(){
let filters=document.getElementById('filters')
switch (filters.classList.contains('invisible')) {
  case true:
   filters.classList.remove('invisible')
   filters.classList.add('slide-in-left')
    break;
case false:
  filters.classList.remove('slide-in-left')
  filters.classList.add('invisible')
  break;
  default:
    break;
}
}
isMobile(){
  if(screen.height>screen.width){
    return true
  }
  else{
    return false
  }


}
}
