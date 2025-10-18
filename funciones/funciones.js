document.addEventListener("DOMContentLoaded", function() {
  const botonSaludo = document.getElementById("botonSaludo");
  if (botonSaludo) {
    botonSaludo.addEventListener("click", function() {
      alert("¡Bienvenido a la Feria Internacional de Viajes 2025! 🌍 Explora, descubre y disfruta nuevas aventuras.");
    });
  }
  const botonColor = document.getElementById("botonColor");
  const titulo = document.querySelector("header h1");
  if (botonColor && titulo) {
    botonColor.addEventListener("click", function() {
      const colores = ["red", "blue", "green", "orange", "purple"];
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      titulo.style.color = colorAleatorio;
    });
  }
  const spanFecha = document.getElementById("fechaActual");
  function actualizarFecha() {
    if(spanFecha) {
      const fecha = new Date();
      spanFecha.textContent = fecha.toLocaleString();
    }
  }
  actualizarFecha();
  setInterval(actualizarFecha, 1000);
  const articulos = document.querySelectorAll("article.destinos, #programa .oferta");
  articulos.forEach(function(articulo) {
    articulo.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "#F4B6C2";
      this.style.transition = "background-color 0.3s";
    });
    articulo.addEventListener("mouseleave", function() {
      this.style.backgroundColor = "";
    });
  });
  const botonesDias = document.querySelectorAll(".filtroDia");
  const botonTodos = document.getElementById("mostrarTodos");
  const filas = document.querySelectorAll("table tbody tr");

  if(botonesDias && filas) {
    botonesDias.forEach(function(boton) {
      boton.addEventListener("click", function() {
        const dia = boton.getAttribute("data-dia");
        filas.forEach(function(fila) {
          fila.style.display = fila.cells[0].textContent.includes(dia) ? "" : "none";
        });
      });
    });
    if(botonTodos) {
      botonTodos.addEventListener("click", function() {
        filas.forEach(fila => fila.style.display = "");
      });
    }
  }

  const botonesFavorito = document.querySelectorAll(".favoritoBtn");
  const contador = document.getElementById("contadorFavoritos");
  let totalFavoritos = 0;
  if(botonesFavorito && contador) {
    botonesFavorito.forEach(btn => {
      btn.addEventListener("click", function() {
        const li = this.parentElement;
        if (!li.classList.contains("favorito")) {
          li.classList.add("favorito");
          this.textContent ="💖 Favorito";
          totalFavoritos++;
        } else {
          li.classList.remove("favorito");
          li.style.backgroundColor = "";
          this.textContent = "⭐ Marcar como favorito";
          totalFavoritos--;
        }
        contador.textContent = totalFavoritos;
      });
    });
  }

  const form = document.querySelector("form");
  if(form) {
    const nombreInput = document.getElementById("Nombre");
    const emailInput = document.getElementById("Email");
    const maxNombre = 50;
    const contadorNombre = document.createElement("p");
    contadorNombre.style.fontSize = "0.9em";
    contadorNombre.style.color = "#555";
    nombreInput.parentElement.insertBefore(contadorNombre, nombreInput.nextSibling);

    nombreInput.addEventListener("input", function() {
      const longitud = nombreInput.value.length;
      contadorNombre.textContent = `${longitud}/${maxNombre} caracteres`;
      contadorNombre.style.color = longitud > maxNombre ? "red" : "#555";
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if(nombreInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Por favor completa los campos Nombre y Correo electrónico antes de registrarte.");
        return;
      }
      alert(`¡Registro exitoso!\nGracias ${nombreInput.value} por registrarte.`);
      form.reset();
      contadorNombre.textContent = "";
    });

    form.addEventListener("reset", function() {
      contadorNombre.textContent = "";
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const articulos = document.querySelectorAll("article.destinos");

  articulos.forEach(articulo => {
    const titulo = articulo.querySelector("h3");
    const contenido = Array.from(articulo.children).filter(child => child !== titulo);

    contenido.forEach(c => c.style.display = "none");

    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", function() {
  
      contenido.forEach(c => {
        if (c.style.display === "none") {
          c.style.display = "";
        } else {
          c.style.display = "none";
        }
      });
    });
  });
});