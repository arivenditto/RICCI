let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const listaProductos = document.getElementById('lista-productos');
  listaProductos.innerHTML = '';
  carrito.forEach((producto) => {
    const elemento = document.createElement('li');
    elemento.textContent = `${producto.nombre} - $${producto.precio}`;
    listaProductos.appendChild(elemento);
  });
  document.getElementById('cantidad-productos').textContent = carrito.length;
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Agregar evento al icono del carrito
document.getElementById('icono-carrito').addEventListener('click', () => {
  const ventanaCarrito = document.getElementById('ventana-carrito');
  ventanaCarrito.style.display = ventanaCarrito.style.display === 'block' ? 'none' : 'block';
});

// Agregar evento al botón de vaciar carrito
document.getElementById('vaciar-carrito').
/** CARRITO **/

const medidasSelect = document.getElementById('medidas');
const marcoSelect = document.getElementById('marco');
const laminaSelect = document.getElementById('lamina');
const agregarAlCarritoButton = document.getElementById('agregar-al-carrito');

agregarAlCarritoButton.addEventListener('click', () => {
  const medidas = medidasSelect.value;
  const marco = marcoSelect.value;
  const lamina = laminaSelect.value;
  
  const producto = {
    nombre: `Foto en ${medidas} con marco de ${marco} y lámina de ${lamina}`,
    precio: calcularPrecio(medidas, marco, lamina)
  };
  
  agregarAlCarrito(producto);
});

function calcularPrecio(medidas, marco, lamina) {
  // Calcula el precio según las opciones seleccionadas
  //
  if (medidas === 'A1( 59,4 X 84,1)') {
    if (marco === 'madera natural') {
      if (lamina === '145') {
        return 50;
      } else if (lamina === '221') {
        return 70;
      } else if (lamina === '398'){
        return 40;
      } else if(lamina== "465"){
        return 90
      }else if(lamina== "723"){
        return 679
      }else if(lamina== "890"){
        return 6773
      }else if(lamina== "000"){
        return 42572
      }else{
        InputEvent
      }
    } else if (marco === 'laqueado negro') {
      // ...
    } else {
      // ...
    }
  } else {
    // ...
  }
}

// Agrega el producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}


