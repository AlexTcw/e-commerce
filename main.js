import { CartService } from "./App/cart/cartService.js";
import { Producto } from "./model/Cart.js";

class main {
  constructor() {
    this.cartService = new CartService();
  }

  async onInit() {
    await this.cartService.getProductsFromCart(); // Espera a que se carguen los productos
    const total = this.cartService.getTotalProducts();
    console.log(`Total de productos = ${total}`);
  }

  async getNumberTotalProducts() {
    await this.cartService.getProductsFromCart(); // Espera a que se carguen los productos
    const total = this.cartService.getTotalProducts();
    const totalProductsElement = document.getElementById("totalProducts");
    if (totalProductsElement) {
      totalProductsElement.textContent = `(${total})`;
    } else {
      console.error("Element with ID 'totalProducts' not found.");
    }
  }
}

const managerInstance = new main();
managerInstance.onInit();
managerInstance.getNumberTotalProducts();
