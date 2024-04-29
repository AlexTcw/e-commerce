export class Producto {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  saveOnLocalStorage() {
    let productosAlmacenados =
      JSON.parse(localStorage.getItem("productos")) || []; // Parse the stored data, or initialize an empty array if no data is found
    productosAlmacenados.push(this); // Push the current product object to the array
    localStorage.setItem("productos", JSON.stringify(productosAlmacenados)); // Store the updated array in localStorage
  }

  static loadProductsFromLocalStorage() {
    const productosAlmacenados =
      JSON.parse(localStorage.getItem("productos")) || []; // Parse the stored data, or initialize an empty array if no data is found
    if (!Array.isArray(productosAlmacenados)) {
      console.error("Data retrieved from Local Storage is not an array.");
      return []; // Return an empty array if the retrieved data is not an array
    }
    return productosAlmacenados.map(
      (productoData) =>
        new Producto(productoData.id, productoData.name, productoData.price)
    ); // Map the stored data to Producto objects
  }

  static saveProductsToLocalStorage(productos) {
    localStorage.setItem("productos", JSON.stringify(productos)); // Store the updated array in localStorage
  }
}
