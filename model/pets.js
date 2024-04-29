export class Pets {
  constructor(data) {
    this.data = data;
  }

  getProductById(id) {
    return this.data.find((product) => product.id === id);
  }

  getAllProducts() {
    return this.data;
  }

  addProductToCart(productId, quantity) {
    // Agregar el producto al carrito de compras
  }
}

export const productsData = [
  { id: 41, name: "Comida para perros (1kg)", price: 12 },
  { id: 42, name: "Comida para gatos (1kg)", price: 10 },
  { id: 43, name: "Juguete mordedor para perros", price: 8 },
  { id: 44, name: "Rascador para gatos", price: 20 },
  { id: 45, name: "Collar para perros", price: 15 },
  { id: 46, name: "Correa retráctil para perros", price: 18 },
  { id: 47, name: "Arena para gatos (5kg)", price: 7 },
  { id: 48, name: "Cama para perros pequeños", price: 25 },
  { id: 49, name: "Cepillo para gatos", price: 6 },
  { id: 50, name: "Transportadora para mascotas", price: 30 },
  { id: 51, name: "Dispensador automático de comida para mascotas", price: 40 },
  { id: 52, name: "Bolsas para excrementos de perro (100 unidades)", price: 5 },
  { id: 53, name: "Caseta para perros", price: 50 },
  { id: 54, name: "Peine para perros y gatos", price: 4 },
  { id: 55, name: "Juguete interactivo para gatos", price: 12 },
  { id: 56, name: "Arnés para gatos", price: 10 },
  { id: 57, name: "Bolsa de transporte para gatos", price: 20 },
  { id: 58, name: "Pienso para aves (500g)", price: 6 },
  { id: 59, name: "Bebedero automático para mascotas", price: 15 },
  { id: 60, name: "Arena para roedores (2kg)", price: 8 },
];
