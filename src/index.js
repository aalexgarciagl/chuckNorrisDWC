import { Categoria } from "./Categoria.js";

document.addEventListener("DOMContentLoaded", function() {
    const categoryTable = document.getElementById("category-table");

    categoryTable.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
          
            const categoryName = event.target.textContent;            
            const category = new Categoria(categoryName);            
            localStorage.setItem("categoria", JSON.stringify(category));            
            window.location.href = `frases.html`;            
        }
    });

    
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(response => response.json())
        .then(data => {
            
            data.forEach(category => {
                const row = categoryTable.insertRow();
                const cell = row.insertCell(0);                
                const categoryLink = document.createElement("a");
                categoryLink.href = "#"; 
                categoryLink.textContent = category;
                cell.appendChild(categoryLink);
            });
        })
        .catch(error => {
            console.error("Error al obtener categorías: " + error);
        });
});
