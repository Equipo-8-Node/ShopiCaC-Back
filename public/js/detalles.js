//import datos from "./datos.js";
const $volver = document.getElementById("botonVolver");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//const producto = datos.productos.find((producto) => producto.id == id);
//console.log(producto)

document.querySelector('body').onload = async () => {
	const res = await fetch(`http://localhost:4000/getAllProducts`)
	const datos = await res.json()

	let $container = document.getElementById("card-detalles");
	$container.innerHTML = "";
	datos.forEach(producto => {

		if (id == producto.id) {
			$container.innerHTML +=
				`<div class="row g-0">
			<div class="col-md-4">
				<img src="${producto.imagen}" class="img-fluid rounded-start h-100" alt="${producto.imagen} image">
			</div>
			
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">${producto.titulo}</h5>
					<ul class="list-group list-group-flush">	
						<li class="list-group-item">${producto.descripcion}</li>
						<li class="list-group-item">Categoria: ${producto.nombre_categoria}</li>
						<li class="list-group-item">Precio: ${producto.precio}</li>
						<li class="list-group-item">Valoracion: ${producto.valoracion_tasa}</li>
						<li class="list-group-item">Cantidad disponible: ${producto.valoracion_conteo}</li>	
					</ul>
				</div>
			</div>
		</div>
	`;
		} else {

		}
	});
};

$volver.addEventListener('click', () => {
	window.history.back();
});
