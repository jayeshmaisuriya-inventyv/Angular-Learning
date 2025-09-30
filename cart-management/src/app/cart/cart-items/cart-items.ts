// CartItems component displays the product list and handles adding to cart
import { Component, inject } from '@angular/core';
import { CartService } from '../../share/service/cart-service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.scss'
})
export class CartItems {
  // Inject CartService to access product list and add to cart
  cartService = inject(CartService);
  // Signal for product list
  cartList = this.cartService.cartList;

  // Add a product to the cart
  addToCart(product: any) {
    this.cartService.addItemToCart(product);
  }
}
