// ===================================================
// Sistema web: Amazon
// ===================================================

// ------------------- VARIABLES Y TIPOS DE DATOS -------------------
var cantidadReseñas = 50296
let cantidadCarrito = 1
const codigoProducto = "B0B2RM68G2"
const urlProducto = "https://www.amazon.com/dp/B0B2RM68G2"
console.log(`Producto en Amazon: ${urlProducto}`)

// String
let nombreProducto = "BIODANCE Bio-Colageno Real Deep Mask"
let aromaProducto = "Colageno"
let precioProducto = 19
let estadoProducto = "Disponible"
console.log(`El ${nombreProducto.toUpperCase()} de aroma ${aromaProducto} tiene un precio de $ ${precioProducto} y actualmente se encuentra ${estadoProducto}`)

// Números
let cantidadProducto = 2
let costoEnvio = 35.60
let subtotal = precioProducto * cantidadProducto   // 38
let totalCompraGeneral = subtotal + costoEnvio       // Nota: Cambiado de 'total' para evitar conflictos con el DOM
console.log(`Total a pagar: $ ${totalCompraGeneral.toFixed(2)}`)

// Booleanos
let disponible = estadoProducto === "Disponible"   // true
let esEconomico = precioProducto < 20              // true
console.log(disponible, esEconomico)

// Condicionales
if (disponible && esEconomico) {
  console.log("Disponible y economico: agregar al carrito")
} else if (disponible) {
  console.log("Disponible, pero el precio es alto")
} else {
  console.log("Producto no disponible")
}

// Bucles
let acumuladorBucle = 0
for (let i = 1; i <= 3; i++) {
    acumuladorBucle += precioProducto
    console.log(`Unidad ${i}: ${aromaProducto} - $ ${precioProducto}`)
}
console.log(`Total de 3 unidades: $ ${acumuladorBucle}`)


// ------------------- FUNCIONES -------------------

// Función declarada
function declarada() {
  console.log(`El ${nombreProducto.toUpperCase()} de aroma ${aromaProducto} tiene un precio de $ ${precioProducto} y actualmente se encuentra ${estadoProducto}`)
}
declarada()

// Función expresada
const expresada = function () {
  console.log(`Precio de 3 unidades: $ ${precioProducto * 3}`)
}
expresada()

// Funciones autoejecutadas (IIFE)
console.log(function () {
    return `Producto validado: ${nombreProducto.toUpperCase()}`
}())

;(function () {
    console.log(`Funcion para validar disponibilidad: ${estadoProducto}`)
})()

// Argumentos y parámetros
function mostrarProducto(nombre, precio) {
    return "Producto: " + nombre + " - Precio: $ " + precio
}
console.log(mostrarProducto('BIODANCE Bio-Colágeno Real Deep Mask', 19))

//funcion flecha
const n = "BIODANCE Bio-Colágeno Real Deep Mask"

function validarProducto(nombre, precio) { console.log(`Producto válido: ${nombre} - $ ${precio}`) }
const validarDisponibilidad = (nombre, estado) => console.log(`${nombre} está ${estado}`)
const registrarImagen = foto => console.log(`Imagen ${foto} registrada`)

validarProducto(n, 19); validarDisponibilidad(n, "Disponible"); registrarImagen("biodance.jpg")


//this
const producto = {
    nombre: "BIODANCE Bio-Colageno Real Deep Mask",
    precio: 19,
    mostrar: function () {
        setTimeout(() => {
            console.log("El producto es " + this.nombre + " y cuesta $ " + this.precio)
        }, 1000)
    },
}
producto.mostrar()


// ------------------- OBJETOS -------------------

let usuario = {
  nombre: "Adri",
  apellido: "Estudiante",
  edad: 20,
  ciudad: "Quito",
  perfil: {
    prime: true,
    puntos: 150
  }
}

console.log(usuario)

// Agregar y eliminar propiedades
usuario.correo = "adri@correo.com"
delete usuario.edad

// Optional chaining (?.) y operador ??
console.log(usuario.perfil?.prime)
console.log(usuario.perfil?.descuento ?? "Sin descuento")

// Desestructuración
let { nombre, apellido, ciudad } = usuario
console.log(nombre, apellido, ciudad)

// Spread: combinar dos objetos
let envio = {
  direccion: "Av. Amazonas",
  gratis: true
}
let usuarioConEnvio = { ...usuario, ...envio }
console.log(usuarioConEnvio)

// Object.values para ver si hay una propiedad vacía
console.log(Object.values(usuario).includes(""))


// ------------------- ARREGLOS -------------------

let productos = [
  { id: 1, nombre: "Laptop Dell", precio: 125, stock: 5 },
  { id: 2, nombre: "Audífonos", precio: 39.99, stock: 10 },
  { id: 3, nombre: "Teclado", precio: 54.9, stock: 0 },
  { id: 4, nombre: "Mouse", precio: 18.5, stock: 20 },
  { id: 5, nombre: "Mochila", precio: 32.75, stock: 8 }
]

let carrito = []

// Métodos de arreglos
productos.forEach(p => console.log(p.nombre))

let nombres = productos.map(p => p.nombre)
let disponibles = productos.filter(p => p.stock > 0)
let laptop = productos.find(p => p.nombre === "Laptop Dell")

console.log(laptop ?? "Producto no encontrado")
console.log(nombres.includes("Mouse"))

// Push, pop, unshift y shift
let deseos = ["Play5", "Pc"]
deseos.push("Celular")
deseos.pop()
deseos.unshift("Tablet")
deseos.shift()

// Spread en arreglos
let ofertas = ["Mouse", "Teclado"]
let todo = [...deseos, ...ofertas]
console.log(todo)

// Reduce
let sumaPrecios = productos.reduce((acum, p) => acum + p.precio, 0)
console.log("Suma de precios: $" + sumaPrecios.toFixed(2))


// ------------------- DOM -------------------

let listaProductos = document.querySelector("#listaProductos")
let listaCarrito = document.querySelector("#listaCarrito")
let contador = document.querySelector("#contador")
let totalDOM = document.querySelector("#total") // Renombrado para evitar conflictos
let buscador = document.querySelector("#buscador")
let saludo = document.querySelector("#saludo")
let botonVaciar = document.querySelector("#vaciar")

// Cambiar texto con textContent
saludo.textContent = `Hola ${usuario.nombre}, ${usuario.ciudad}`

// Crear un enlace al producto de Amazon
let enlace = document.createElement("a")
enlace.href = urlProducto
enlace.target = "_blank"
enlace.textContent = "Ver producto en Amazon"
document.querySelector("main").appendChild(enlace)

// Mostrar los productos en la página
function mostrarProductos(lista) {
  listaProductos.innerHTML = ""   // limpiar lo anterior

  lista.forEach(p => {
    // Crear elementos
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("producto")

    let titulo = document.createElement("h3")
    titulo.textContent = p.nombre

    let precio = document.createElement("p")
    precio.textContent = "$" + p.precio

    let boton = document.createElement("button")
    boton.textContent = "Agregar al carrito"

    // Si no hay stock, agrego una clase y desactivo el botón
    if (p.stock === 0) {
      tarjeta.classList.add("agotado")
      boton.textContent = "No disponible"
      boton.disabled = true
    }

    // Evento click del botón
    boton.addEventListener("click", () => {
      carrito.push(p)
      mostrarCarrito()
    })

    // Meter los elementos dentro de la tarjeta
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)
    listaProductos.appendChild(tarjeta)
  })
}

// Mostrar el carrito
function mostrarCarrito() {
  listaCarrito.innerHTML = ""

  carrito.forEach((p, posicion) => {
    let item = document.createElement("li")
    item.textContent = p.nombre + " - $" + p.precio + " "

    let quitar = document.createElement("button")
    quitar.textContent = "Eliminar"
    quitar.addEventListener("click", () => {
      carrito.splice(posicion, 1)   // quita ese producto
      mostrarCarrito()
    })

    item.appendChild(quitar)
    listaCarrito.appendChild(item)
  })

  contador.textContent = carrito.length
  totalDOM.textContent = carrito.reduce((acum, p) => acum + p.precio, 0).toFixed(2)
}

// Buscador: filtra mientras escribo
buscador.addEventListener("input", () => {
  let texto = buscador.value.toLowerCase()
  let resultado = productos.filter(p => p.nombre.toLowerCase().includes(texto))
  mostrarProductos(resultado)
})

// Botón vaciar carrito
botonVaciar.addEventListener("click", () => {
  carrito = []
  mostrarCarrito()
})

// Al cargar la página
mostrarProductos(productos)
mostrarCarrito()


// ------------------- ASINCRONISMO (Promesas, async y await) -------------------

// Promesa: simula pedir las ofertas a un servidor (tarda 2 segundos)
function cargarOfertas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, nombre: "BIODANCE Bio-Colageno Real Deep Mask - Pack de 2", precio: 36, stock: 10 },
        { id: 102, nombre: "BIODANCE Bio-Colageno Real Deep Mask - Pack de 4", precio: 68, stock: 6 }
      ])
    }, 2000)
  })
}

// async / await: espera las ofertas y las agrega a la lista de productos
async function mostrarOfertas() {
  try {
    console.log("Cargando ofertas...")
    let ofertasNuevas = await cargarOfertas()
    console.log("Ofertas cargadas", ofertasNuevas)

    productos.push(...ofertasNuevas)
    mostrarProductos(productos)
  } catch (error) {
    console.log("Error al cargar las ofertas", error)
  }
}

// Promesa: simula procesar el pago (resolve si hay productos, reject si el carrito está vacío)
function procesarPago(totalCompra) {
  return new Promise((resolve, reject) => {
    console.log("Procesando pago...")
    setTimeout(() => {
      if (totalCompra > 0) {
        resolve({ codigo: "AMZ-987654321", estado: "Aprobado" })
      } else {
        reject("El carrito está vacío, no se puede pagar")
      }
    }, 1500)
  })
}

// Crear con el DOM el botón de pagar y el mensaje
let botonPagar = document.createElement("button")
botonPagar.textContent = "Pagar"

let mensajePago = document.createElement("p")

document.querySelector("main").appendChild(botonPagar)
document.querySelector("main").appendChild(mensajePago)

// Evento click del botón pagar
botonPagar.addEventListener("click", async () => {
  try {
    let totalActual = carrito.reduce((acum, p) => acum + p.precio, 0)
    let resultado = await procesarPago(totalActual)

    mensajePago.textContent = `Compra exitosa. Código: ${resultado.codigo}`
    carrito = []
    mostrarCarrito()
  } catch (error) {
    mensajePago.textContent = `Error: ${error}`
  }
})

// Al cargar la página
mostrarOfertas()