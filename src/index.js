import { Categoria } from "./Clases.js";
import { Frase } from "./Clases.js";

document.addEventListener("DOMContentLoaded", function() {
    const tablaCategorias = document.getElementById("tablaCategorias");

    tablaCategorias.addEventListener("click", function(event) {
      //Este if comprueba que se pulsa un elemento <a></a> en HTML.
        if (event.target.tagName === "A") {
          
            const nombreCategoria = event.target.textContent;            
            const categoriaObjetc = new Categoria(nombreCategoria);            
            localStorage.setItem("categoria", JSON.stringify(categoriaObjetc));            
            window.location.href = `frases.html`;            
        }
    });

    
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(response => response.json())
        .then(data => {
            
            data.forEach(categoria => {
                const row = tablaCategorias.insertRow();
                const cell = row.insertCell(0);                
                const linkCategoria = document.createElement("a");
                linkCategoria.href = "#"; 
                linkCategoria.textContent = categoria;
                cell.appendChild(linkCategoria);
            });
        })
        .catch(error => {
            console.error("Error al obtener categorías: " + error);
        });
});


const botonGenerarFrase = document.getElementById("generarFrase");
const fraseAleatoriaDiv = document.getElementById("fraseAleatoriaDiv");


botonGenerarFrase.addEventListener("click", () => {
  
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      const fraseObject = new Frase("",data.value)
      localStorage.setItem("fraseAleatoria", JSON.stringify(fraseObject)) 
      fraseAleatoriaDiv.innerHTML = fraseObject.frase;
    })
    .catch((error) => {
      console.error("Error al obtener la frase:", error);
    });
});

