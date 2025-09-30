// Angular service for managing cart and product list
import { Injectable , signal } from '@angular/core';
import { Cart } from '../interface/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Signal holding the items added to the cart
  private _cartItems = signal<Cart[]>([]);

  // Get the current cart items as a signal
  get cartItems() {
    return this._cartItems;
  }

  // Add an item to the cart. If it exists, increase quantity.
  addItemToCart(item: Cart) {
    this._cartItems.update(items => {
      const idx = items.findIndex(i => i.id === item.id);
      if (idx > -1) {
        // If item exists, increase its quantity
        return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      // If item does not exist, add it to cart
      return [...items, { ...item }];
    });
  }

  // Remove an item from the cart by id
  removeItemFromCart(id: number) {
    this._cartItems.update(items => items.filter(item => item.id !== id));
  }

  // Get total quantity of all items in the cart
  getTotalQuantity() {
    return this._cartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get total price of all items in the cart
  getTotalPrice() {
    return this._cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Signal holding the product list (not the cart)
  private _cartList = signal<Cart[]>([
    {
      id: 1,
      name: 'iphone 14',
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: 'iphone 15',
      price: 500,
      quantity: 1,
    },
    {
      id: 3,
      name: 'iphone 16',
      price: 2500,
      quantity: 1,
    },
    {
      id: 4,
      name: 'iphone 17',
      price: 100,
      quantity: 1,
    },
    {
      id: 5,
      name: 'iphone 18',
      price: 1025,
      quantity: 1,
    }
  ]);

  // Get the product list as a signal
  get cartList() {
    return this._cartList;
  }

  // Add a product to the product list (not used for cart)
  addToCart(item: Cart) {
    this._cartList.update(list => [...list, item]);
  }

  // Remove a product from the product list (not used for cart)
  removeFromCart(id: number) {
    this._cartList.update(list => list.filter(cart => cart.id !== id));
  }
}
