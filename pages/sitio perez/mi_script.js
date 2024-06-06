// Datos de productos (ejemplo)
const productos = [
    { id: 1, nombre: "CD - Album 1", precio: 10 },
    { id: 2, nombre: "CD - Album 2", precio: 12 },
    { id: 3, nombre: "Camiseta", precio: 20 }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    const productosDiv = document.getElementById("productos");

    productos.forEach(producto => {
        const productoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `;
        productosDiv.innerHTML += productoHTML;
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log("Producto agregado al carrito:", idProducto);
}

// Llama a la función para mostrar los productos al cargar la página
mostrarProductos();


