import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../share/service/cart-service';

@Component({
  selector: 'app-cart-list',
  imports: [CommonModule],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
// CartList component displays the cart and handles removing items and showing totals
export class CartList {
  // Inject CartService for cart operations
  cartService = inject(CartService);
  // Signal for items added to cart
  cartItems = this.cartService.cartItems;

  // Remove an item from the cart by id
  removeFromCart(id: number) {
    this.cartService.removeItemFromCart(id);
  }

  // Get total quantity of items in the cart
  get totalQuantity() {
    return this.cartService.getTotalQuantity();
  }

  // Get total price of all items in the cart
  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  // Utility to create a range array for looping
  createRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
