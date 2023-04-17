/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

/* manipular el DOM */

// traer elemento del DOM por selector CSS
const caja = (selector) => document.querySelector(selector);

const newCard = (obj) => {
  const div= document.createElement("div")
  div.className = `col card-img mb-4 card border-0 d-flex flex-wrap`
  div.innerHTML = `
    <div class="carta img mb-2 card-img-modified">
      <img class="w-100 h-100 rounded-4 card-img-modified" src="${obj.photo}" alt="${obj.title}">
    </div>
    <div class="d-flex col justify-content-between mb-0">
    <span class="fw-bold hosts" >${obj.superHost == true ? "SUPER HOST":" "}</span>
      <p class="text-muted">${obj.type}</p>
      <div>
      <span class="material-symbols-outlined">star</span>
        <span class="numbers">${obj.rating}</span>
      </div>  
    </div>
      <p class="card-title">${obj.title}</p>
  `


  return div
}




export default {
  newCard,
  caja,
}