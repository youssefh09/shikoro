import { Component, OnInit } from '@angular/core';
import { Product, ProductItem } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product = { items: [] };

  dataSource: Array<ProductItem> = [];

  displayedColumns: string[] = ['title', 'price', 'symbol'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Product) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  onRemoveFromCart(item: ProductItem): void {
    this.cartService.removeFromCart(item);
  }




}
