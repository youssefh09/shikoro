import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [
    { title: "Samsung Galaxy S22", description: "Magnifique écran, bonne performance et batterie longue durée", price: 450 },
    { title: "test", description: "test", price: 450 },
    { title: "test", description: "test", price: 450 },
    { title: "test", description: "test", price: 450 },
    { title: "test", description: "test", price: 450 },
    { title: "test", description: "test", price: 450 },
    { title: "test", description: "test", price: 450 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
