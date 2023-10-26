import { Categoria } from "./Clases.js";
import { Frase } from "./Clases.js";

document.addEventListener("DOMContentLoaded", function() {
  
  const fraseAleatoria = document.getElementById("fraseAleatoriaDiv")
  const fraseObjetc = JSON.parse(localStorage.getItem("fraseAleatoria"))
  fraseAleatoria.innerHTML = fraseObjetc.frase
  const categoria = JSON.parse(localStorage.getItem("categoria"));
  const frase = document.getElementById("frase");   
  
  
  const categoriah2 = document.getElementById("categoriaSelec")

  
  fetch(`https://api.chucknorris.io/jokes/random?category=${categoria.nombre}`)
      .then(response => response.json())
      .then(data => {          
          const fraseObjetc = new Frase(categoria,data.value) 
          localStorage.setItem("frase",JSON.stringify(fraseObjetc))         
          categoriah2.textContent = categoria.nombre
          frase.textContent = fraseObjetc.frase;
      })
      .catch(error => {
          console.error("Error al obtener la frase: " + error);
      });
});
