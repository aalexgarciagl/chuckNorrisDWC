import { Categoria } from "./Categoria.js";

document.addEventListener("DOMContentLoaded", function() {
  
  const categoria = JSON.parse(localStorage.getItem("categoria"));  
  
  const frase = document.getElementById("frase");
  const categoriah2 = document.getElementById("categoriaSelec")

  
  fetch(`https://api.chucknorris.io/jokes/random?category=${categoria.nombre}`)
      .then(response => response.json())
      .then(data => {          
          frase.textContent = data.value;
          categoriah2.textContent = categoria.nombre
      })
      .catch(error => {
          console.error("Error al obtener la frase: " + error);
      });
});
