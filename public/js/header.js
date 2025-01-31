// Las variables para saber en qué página estoy

const ruta = window.location.pathname;
const pagina = ruta.split("/").pop();

function header() {
  document.getElementById("idheader").innerHTML = `
    <nav
    class="fixed-top navbar navbar-expand-md navbar-dark bd-navbar bg-dark bg-gradient bg-opacity-75 bg-blur"
    >
    <div class="container-xxl d-flex flex-wrap flex-md-nowrap">
      <figure class="my-0">
        <img
          src="../img/logo_ShopiCaC.png"
          alt="Logo ShopiCaC"
          width="70"
        />
        <figcaption class="text-white text-center">ShopiCaC</figcaption>
      </figure>
    
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#bdNavbar"
        aria-controls="bdNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>
    
      <!-- nav -->
      <div class="collapse navbar-collapse" id="bdNavbar">
      <hr class="d-md-none text-white-50" />

      
      <ul class="navbar-nav barra-navegacion">
        <li class="nav-item btn-width border-2" id="test">
          <button id="idcarrito" style="visibility: hidden;"
            class="btn btn-bd-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </li>
        
        <li class="nav-item btn-width border-2">
          <a class="nav-link" id="navbarinicio" href="/">INICIO</a>
        </li>
  
        <li class="nav-item btn-width border-2">
          <a class="nav-link" id="navbarproductos" href="/productos">PRODUCTOS</a>
        </li>
  
        <li class="nav-item btn-width border-2">
          <a class="nav-link" id="navbarcontacto" href="/contacto">CONTACTO</a>
        </li>
  
        <li class="nav-item btn-width border-2">
          <a class="nav-link" id="navbarlogin" href="/login">LOGIN</a>
        </li>
    
        </ul>
      </div>
    </div>
    </nav>
    `;
}

// Muestra el boton del carrito sólo en la página de productos
function mostrarcarrito() {
  if (pagina === "products.html" || pagina === "productos") {
    document.getElementById("idcarrito").style.visibility = "visible";
  }
}
// console.log("pagina: ", pagina)

// Muestra el subrayado dependiendo la página
function activenavbar() {
  console.log(pagina)
  switch (pagina) {
    case "index.html":
    case "":
      document.getElementById("navbarinicio").classList.add("active");
      break;
    case "productos":
    case "productos":
      document.getElementById("navbarproductos").classList.add("active");
      break;
    case "contact.html":
    case "contacto":
      document.getElementById("navbarcontacto").classList.add("active");
      break;
    case "login.html":
    case "login":
      document.getElementById("navbarlogin").classList.add("active");
      break;
  }
}

header();
mostrarcarrito();
activenavbar();
