// Main Cart component that includes product list and cart display
import { Component, inject } from '@angular/core';
import { CartService } from '../share/service/cart-service';
import { CartItems } from "./cart-items/cart-items";
import { CartList } from "./cart-list/cart-list";

@Component({
  selector: 'app-cart',
  imports: [CartItems, CartList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  // Inject CartService to access product list and add to cart
  cartService = inject(CartService);
  // Signal for product list
  cartList = this.cartService.cartList;

  // Add a product to the cart
  addToCart(product: any) {
    this.cartService.addItemToCart(product);
  }
}
