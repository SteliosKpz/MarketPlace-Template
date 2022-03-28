import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {

  title = 'LordOfTheStitch';
  constructor(public shpcart:ShoppingCartService){

  }
  ngOnInit() {
  }

  isMobile(){
    return screen.height>screen.width
  }

  triggernavMenu(){

    let navbar=document.getElementById('navbar')
    if(screen.height>screen.width){
      switch (navbar.classList.contains('invisible')) {
        case true:
          navbar.classList.remove('invisible')
          navbar.classList.add('slide-in-top')
          break;
        case false:
          navbar.classList.remove('slide-in-top')
          navbar.classList.add('invisible')
        default:
          break;
      }
    }

  }
}


