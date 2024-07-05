document.querySelector('body').onload = async () => {
  const res = await fetch(`http://localhost:4000/getAllProducts`)
  const datos = await res.json()

  let listaHTML = document.querySelector(`#cards`)
  listaHTML.innerHTML = ''
  datos.forEach(producto => {
    listaHTML.innerHTML += `
        <div class="producto">
        <img src="${producto.imagen}" class="card-img-top h-50" alt="${producto.titulo} image">
  
        <div class="card-body d-flex flex-column justify-content-between p-2">
  
        <p class="card-title">${producto.titulo}</p>
        <p class="card-text">${producto.nombre_categoria}</p>
        </div>
        <div class="card-footer">
              <p>$${producto.precio}</p>
              <div>
                <a href="./detail.html?id=${producto.id}" class="btn btn-outline-danger btn-sm">
                  Detalles
                </a>  
                <button id="${producto.id}" class="btn btn-outline-danger add-to-cart-btn btn-sm">
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            </div>
      `;
  });
};