import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductItem } from '../models/Product';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Product>({ items: [] })

  constructor(private _snackbar: MatSnackBar) { }

  addToCart(item: ProductItem): void {

    //add logic quantity 

    const items = [...this.cart.value.items];

    items.push(item);

    this.cart.next({ items });
    this._snackbar.open('1 article ajouté', 'Ok', {
      duration: 3000
    });

  }

  removeFromCart(item: ProductItem): void {
    const itemToRemove = this.cart.value.items.filter((_item) => _item.title !== item.title);

    this.cart.next({ items: itemToRemove });
    this._snackbar.open(' 1 article supprimé ', 'Ok', {
      duration: 3000
    });
  }
}
