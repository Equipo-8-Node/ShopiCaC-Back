document.querySelector("body").onload = async () => {
  const res = await fetch('http://localhost:3000/getCategorias')
  const datos = await res.json();

  let listaHTML = document.querySelector(`#categoria`);
  // listaHTML.innerHTML = "";
  // listaHTML.innerHTML = '<option selected>Seleccione una categoría</option>'

  datos.forEach((categoria) => {
    listaHTML.innerHTML += `
      <option value="${categoria.id}">${categoria.nombre}</option>

    `;
  });
};
