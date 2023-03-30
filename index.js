var modal = document.createElement("div");//crea un div modal
modal.classList.add("modal");//a ese div le damos la clase modal
modal.style.display = "flex";//agregamos estilo
modal.style.alignItems = "center";
modal.style.justifyContent = "center";
modal.style.border = "2px solid #aaa";
modal.style.borderRadius = "10px";
modal.style.width = "80%";
modal.style.marginTop = "10em";
modal.style.margin = "auto"
var image = document.createElement("img");// con este codigo creamos una variable image que le damos la etiqueta img
image.style.marginRight = "20px";//add style in img
image.src = "img/html5logo.png";//add src in img tag

var content = document.createElement("div");//add a var call content and add tag element div
content.style.display = "flex";//add style
content.style.flexDirection = "column";
content.style.justifyContent = "center";

var heading = document.createElement("h2");// to create headind
heading.textContent = "Java Script";

var headingTwo = document.createElement("h3");
headingTwo.textContent = "Hola! mundo";

var mensaje = document.createElement("p");// to create mesager
mensaje.textContent = "que facil es incluir comillas dobles y comillas simples";

content.appendChild(heading);//se agrega a content hijo el heading
content.appendChild(headingTwo);
content.appendChild(mensaje);

modal.appendChild(image);//se agrega en modal hijo img and the content div
modal.appendChild(content);
document.body.appendChild(modal);
