export class Technologies {
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
  { id: 81, name: "Smartphone Samsung Galaxy S21", price: 999 },
  { id: 82, name: 'Laptop HP Pavilion 15.6"', price: 799 },
  { id: 83, name: "Tableta Apple iPad Air (2020)", price: 599 },
  { id: 84, name: "Smartwatch Apple Watch Series 6", price: 399 },
  { id: 85, name: "Auriculares inalámbricos Sony WH-1000XM4", price: 349 },
  { id: 86, name: "Cámara digital Canon EOS Rebel T7", price: 499 },
  { id: 87, name: "Impresora multifunción Epson EcoTank ET-2720", price: 249 },
  { id: 88, name: "Consola de videojuegos PlayStation 5", price: 499 },
  { id: 89, name: "Router WiFi TP-Link Archer C7", price: 79 },
  { id: 90, name: 'Monitor de computadora Dell UltraSharp 27"', price: 349 },
  { id: 91, name: "Disco duro externo Seagate Backup Plus 2TB", price: 79 },
  { id: 92, name: "Teclado mecánico Razer BlackWidow Elite", price: 129 },
  { id: 93, name: "Ratón gaming Logitech G502 HERO", price: 79 },
  { id: 94, name: "Altavoces Bluetooth JBL Flip 5", price: 119 },
  { id: 95, name: "Cargador inalámbrico Samsung Qi Certified", price: 39 },
  { id: 96, name: "Memoria USB SanDisk Ultra 128GB", price: 19 },
  {
    id: 97,
    name: "Soporte de escritorio para monitor AmazonBasics",
    price: 29,
  },
  { id: 98, name: "Batería externa Anker PowerCore 20000mAh", price: 49 },
  { id: 99, name: "Kit de realidad virtual Oculus Quest 2", price: 299 },
  {
    id: 100,
    name: "Estación de acoplamiento para laptop Dell WD19",
    price: 179,
  },
];
