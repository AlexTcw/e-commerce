export class Supermarket {
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
  { id: 61, name: "Leche entera (1 litro)", price: 2.5 },
  { id: 62, name: "Huevos (docena)", price: 3 },
  { id: 63, name: "Arroz (1kg)", price: 1.5 },
  { id: 64, name: "Pasta (500g)", price: 1 },
  { id: 65, name: "Pan de molde integral", price: 2 },
  { id: 66, name: "Aceite de oliva virgen extra (500ml)", price: 4 },
  { id: 67, name: "Azúcar blanco (1kg)", price: 1.5 },
  { id: 68, name: "Sal de mesa (1kg)", price: 0.5 },
  { id: 69, name: "Café molido (250g)", price: 3 },
  { id: 70, name: "Té verde (caja de 20 bolsitas)", price: 2.5 },
  { id: 71, name: "Agua mineral (pack de 6 botellas)", price: 3 },
  { id: 72, name: "Refresco de cola (2 litros)", price: 1.5 },
  { id: 73, name: "Yogur natural (pack de 4 unidades)", price: 2 },
  { id: 74, name: "Queso cheddar (250g)", price: 2.5 },
  { id: 75, name: "Mantequilla (200g)", price: 1.5 },
  { id: 76, name: "Sopa en lata (varios sabores)", price: 1 },
  { id: 77, name: "Atún en lata al natural", price: 1.5 },
  { id: 78, name: "Tomate en conserva (400g)", price: 1 },
  { id: 79, name: "Puré de patatas (200g)", price: 1.5 },
  { id: 80, name: "Galletas saladas (paquete de 250g)", price: 2 },
];
