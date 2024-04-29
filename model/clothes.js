export class Clothes {
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
  { id: 1, name: "Camiseta blanca", price: 15 },
  { id: 2, name: "Jeans ajustados", price: 25 },
  { id: 3, name: "Abrigo de lana", price: 60 },
  { id: 4, name: "Falda plisada", price: 20 },
  { id: 5, name: "Camisa de cuadros", price: 30 },
  { id: 6, name: "Chaqueta de cuero", price: 70 },
  { id: 7, name: "Sudadera con capucha", price: 35 },
  { id: 8, name: "Pantalones de chándal", price: 40 },
  { id: 9, name: "Vestido de verano", price: 45 },
  { id: 10, name: "Bufanda de lana", price: 10 },
  { id: 11, name: "Calcetines deportivos", price: 5 },
  { id: 12, name: "Zapatos de tacón", price: 50 },
  { id: 13, name: "Gorro de lana", price: 8 },
  { id: 14, name: "Polo de manga corta", price: 20 },
  { id: 15, name: "Pantalones cortos", price: 18 },
  { id: 16, name: "Traje formal", price: 150 },
  { id: 17, name: "Zapatos de deporte", price: 55 },
  { id: 18, name: "Chaleco acolchado", price: 45 },
  { id: 19, name: "Gafas de sol", price: 25 },
  { id: 20, name: "Bañador", price: 30 },
];
