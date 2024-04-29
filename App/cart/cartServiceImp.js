import { Producto } from "../../model/Cart.js";
import { CartService } from "../cart/cartService.js";

export class CartServiceImp {
  constructor() {
    this.cartService = new CartService();
    this.cardsContainer = document.getElementById("cardsContainer");
    this.productos = [];
    this.getProductsFromCart();
  }

  async getProductsFromCart() {
    try {
      // Retrieve products from Local Storage
      this.productos = Producto.loadProductsFromLocalStorage();
      this.displayProducts(); // Después de cargar los productos, muestra automáticamente
    } catch (error) {
      console.error("Error retrieving products from Local Storage:", error);
      // Handle errors appropriately (e.g., display a user-friendly message)
    }
  }

  displayProducts() {
    // Limpiar el contenedor antes de mostrar los productos
    this.cardsContainer.innerHTML = "";

    if (this.productos.length === 0) {
      // Si no hay productos, mostrar un mensaje de que el carrito está vacío
      this.cardsContainer.innerText = "Tu carrito está vacío.";
    } else {
      // Si hay productos, crear elementos HTML para cada producto y mostrarlos en el contenedor
      this.productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${producto.name}</h5>
              <p class="card-text">ID: ${producto.id}</p>
              <p class="card-text">Precio: ${producto.price}</p>
              <button class="btn btn-danger delete-btn" data-product-id="${producto.id}">Eliminar</button>
            </div>
          `;
        this.cardsContainer.appendChild(card);
      });

      // Agregar controladores de eventos para los botones de eliminación
      this.addDeleteButtonListeners();
    }
  }

  addDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.dataset.productId;
        this.removeFromCart(productId);
      });
    });
  }

  removeFromCart(productId) {
    this.cartService
      .removeFromCart(productId)
      .then(() => {
        this.getProductsFromCart();
        this.getNumberTotalProducts();
      })
      .catch((error) => {
        // Manejar errores si es necesario
        console.error("Error al eliminar producto del carrito:", error);
      });
  }

  async getNumberTotalProducts() {
    await this.cartService.getProductsFromCart(); // Espera a que se carguen los productos
    const total = this.cartService.getTotalProducts();
    const totalPrice = await this.cartService.getTotalPrice(); // Espera a que se resuelva el total de precios

    const totalProductsElement = document.getElementById("totalProducts");
    const totalProductsPrice = document.getElementById("cargoProducts");

    if (totalProductsElement) {
      totalProductsElement.textContent = `Total Products: ${total}`;
    } else {
      console.error("Element with ID 'totalProducts' not found.");
    }

    if (totalPrice) {
      totalProductsPrice.textContent = `Cargo total: $${totalPrice}`;
    } else {
      console.error("Total price not found.");
    }
  }
}

const productManagerInstance = new CartServiceImp();
productManagerInstance.displayProducts();
productManagerInstance.getNumberTotalProducts();
