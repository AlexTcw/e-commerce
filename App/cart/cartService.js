import { Producto } from "/model/Cart.js"; // Importa la clase Producto

export class CartService {
  constructor() {
    this.productos = [];
  }

  async getProductsFromCart() {
    try {
      // Retrieve products from Local Storage
      this.productos = Producto.loadProductsFromLocalStorage();
    } catch (error) {
      console.error("Error retrieving products from Local Storage:", error);
      // Handle errors appropriately (e.g., display a user-friendly message)
    }
  }

  async printProductsToConsole() {
    await this.getProductsFromCart(); // Asegúrate de que los productos estén cargados antes de imprimirlos

    if (this.productos.length === 0) {
      console.log("Tu carrito está vacío.");
    } else {
      console.log("Productos en tu carrito:");
      for (const producto of this.productos) {
        console.log(
          `  - ID: ${producto.id}, Nombre: ${producto.name}, Precio: ${producto.price}`
        );
      }
    }
  }

  async getTotalPrice() {
    await this.getProductsFromCart(); // Asegúrate de que los productos estén cargados antes de imprimirlos
    let totalPrice = 0;
    if (this.productos.length === 0) {
      console.log("Tu carrito está vacío.");
    } else {
      console.log("Productos en tu carrito:");
      for (const producto of this.productos) {
        totalPrice += producto.price;
      }
      console.log("Total:", totalPrice); // Opcional: puedes imprimir el total aquí
    }
    return totalPrice; // Retornar el total de precios
  }

  async removeFromCart(productId) {
    await this.getProductsFromCart(); // Asegúrate de que los productos estén cargados antes de imprimirlos

    if (this.productos.length === 0) {
      console.log("Tu carrito está vacío.");
    } else {
      const index = this.productos.findIndex(
        (producto) => producto.id == productId
      );
      console.log(index);
      this.productos.splice(index, 1);
      console.log(this.productos);
      Producto.saveProductsToLocalStorage(this.productos);
    }
  }

  addToCart(producto) {
    if (!(producto instanceof Producto)) {
      throw new Error("Argumento inválido: se esperaba un objeto Producto.");
    }

    this.productos.push(producto);
    producto.saveOnLocalStorage(); // Guarda el producto en el Local Storage (usando cart.js)
    console.log(`Producto "${producto.name}" añadido al carrito.`);
  }

  getTotalProducts() {
    return this.productos.length;
  }
}

// Esta parte simula el código que se ejecutaría al inicializar el componente (en Angular)
const cartService = new CartService();
cartService.printProductsToConsole();
