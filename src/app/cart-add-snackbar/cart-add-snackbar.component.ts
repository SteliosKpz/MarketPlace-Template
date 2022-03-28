import { Component, OnInit,Inject } from '@angular/core';
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {ShoppingCartService, product } from '../services/shopping-cart.service';
@Component({
  selector: 'app-cart-add-snackbar',
  templateUrl: './cart-add-snackbar.component.html',
  styleUrls: ['./cart-add-snackbar.component.scss']
})
export class CartAddSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public product:product, public _snackRef: MatSnackBarRef<CartAddSnackbarComponent>) { }

  ngOnInit(): void {
  }

}
