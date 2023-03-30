var modal = document.createElement("div");
modal.classList.add("modal");
var image = document.createElement("img");
var heading = document.createElement("h2")
var headingTwo = document.createElement("h3")
var mensaje = document.createElement("p");
image.src = "img/html5logo.png"
heading.textContent = "Java Script"
headingTwo.textContent = "Hola! mundo"
mensaje.textContent = "que facil es incluir comillas dobles y comillas simples";
modal.appendChild(heading);
modal.appendChild(headingTwo);
modal.appendChild(mensaje);
modal.appendChild(image);
document.body.appendChild(modal);
