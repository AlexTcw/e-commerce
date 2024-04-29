export class Laundry {
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
  { id: 21, name: "Detergente líquido", price: 8 },
  { id: 22, name: "Suavizante de telas", price: 6 },
  { id: 23, name: "Quitamanchas en spray", price: 5 },
  { id: 24, name: "Blanqueador para ropa", price: 7 },
  { id: 25, name: "Perfume para la ropa", price: 10 },
  { id: 26, name: "Esponja para lavado", price: 3 },
  { id: 27, name: "Secadora de ropa", price: 200 },
  { id: 28, name: "Cesto de ropa sucia", price: 15 },
  { id: 29, name: "Plancha de vapor", price: 40 },
  { id: 30, name: "Tendedero de ropa", price: 25 },
  { id: 31, name: "Bolsas para lavado delicado", price: 5 },
  { id: 32, name: "Perchas de ropa", price: 12 },
  { id: 33, name: "Cepillo de pelusas", price: 4 },
  { id: 34, name: "Bolsas para almacenamiento de ropa", price: 8 },
  { id: 35, name: "Alfileres de ropa", price: 2 },
  { id: 36, name: "Tabla de planchar", price: 30 },
  { id: 37, name: "Rodillo quitapelusas", price: 5 },
  { id: 38, name: "Cubrecolchón impermeable", price: 20 },
  { id: 39, name: "Guantes de lavado", price: 6 },
  { id: 40, name: "Bolsas para lavado de zapatos", price: 3 },
];
