document.querySelector('body').onload = async () => {
    const res = await fetch(`http://localhost:4000/getProductsInicio`);
    const datos = await res.json();

    let listaHTML = document.querySelector(`#cuatroProductos`);
    listaHTML.innerHTML = '';

    datos.forEach(producto => {
        listaHTML.innerHTML += `
             <div class="producto">
                <div class="producto-info">
                    <h3 class="producto-titulo">
                        <a href="./products.html">${producto.nombre_categoria}</a>
                    </h3>
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                    <a class="producto-btn" href="./products.html">Ver productos</a>
                </div>
             </div>
            `;
    });
};

