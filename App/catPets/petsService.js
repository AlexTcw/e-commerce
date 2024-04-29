import { Pets, productsData } from "/model/pets.js";
import { Producto } from "../../model/Cart.js";
import { CartService } from "../cart/cartService.js";

//Recuperamos el cardContainer
const cardsContainer = document.getElementById("cardsContainer");

export class PetsService {
  constructor() {
    this.pets = new Pets(productsData);
    this.cardsContainer = document.getElementById("cardsContainer");
    this.cartService = new CartService();
  }

  displayProducts() {
    const allProducts = this.pets.getAllProducts();

    console.log("------->Datos de pets.js<-------");
    console.log(allProducts);

    allProducts.forEach((element) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const cardContent = `
              <div class = "text-cont">
              <h2>${element.name}</h2>
              <p>Precio: $${element.price}</p>
              <button type="button" class="btn btn-success" id="${element.id}">Add to Cart</button>
              </div>
              <div class = "images-cont">
              <img
              class="staticImage img-thumbnail float-end"
              src="/model/img/pets/petstore.jpeg"
              alt=""
            />              
              </div>
              `;

      cardElement.innerHTML = cardContent;
      cardsContainer.appendChild(cardElement);

      const addToCartButton = document.getElementById(element.id);
      if (addToCartButton) {
        addToCartButton.addEventListener("click", () => {
          const producto = new Producto(
            element.id,
            element.name,
            element.price
          );
          this.cartService.addToCart(producto); // Call addToCart on CartService
          this.getNumberTotalProducts(); // Update total number of products
        });
      } else {
        console.error(`Element with ID ${element.id} not found.`);
      }
    });
  }

  async getNumberTotalProducts() {
    await this.cartService.getProductsFromCart(); // Espera a que se carguen los productos
    const total = this.cartService.getTotalProducts();
    const totalProductsElement = document.getElementById("totalProducts");
    if (totalProductsElement) {
      totalProductsElement.textContent = `Total Products: ${total}`;
    } else {
      console.error("Element with ID 'totalProducts' not found.");
    }
  }
}

/*imaginemos que es el ngoninit*/
const productManagerInstance = new PetsService();
productManagerInstance.displayProducts();
productManagerInstance.getNumberTotalProducts();
