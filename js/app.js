
import data from "./data.js";
import dom from "./dom.js";

const URL = './stays.json'

const stays = dom.caja("#stays")
const datos = await data.getData(URL);
const finlad = dom.caja("#place")
dom.showCards(datos)

const location = dom.caja('#firstlocation');

const boton = dom.caja("#boton");


// boton.addEventListener("click", (e) => {
//   alert("Este botón está en mantenimiento");
//   e.preventDefault()
// });

// esto funciona pero lo omiti para filtrar al darle al boton
// location.addEventListener("keys", ()=>{
//   let filtro = location.value;

//   const filtered = filtro == " "? datos : data.filterByLocation(datos, filtro);
//   stays.innerHTML=`${filtered.length}`
//   dom.showCards(filtered);
// })


boton.addEventListener("click", (e)=>{
  let filtro = location.value;

  const filtered = filtro == " "? datos : data.filterByLocation(datos, filtro);
  stays.innerHTML=`${filtered.length}`
  dom.showCards(filtered);
  e.preventDefault()
})

//finlad
let allDataHasCountry = true;
for (let i = 0; i < datos.length; i++) {
  if (!datos[i].country) {
    allDataHasCountry = false;
    break;
  }
}

if (allDataHasCountry) {
  finlad.innerHTML = datos[0].country;
} else {
  console.log('Not all data has a country property.');
}

//-------- 

const inputElement = document.getElementById("firstlocation");
const list = dom.caja("#lista");
let listaAgregada = false;

function ListLugares() {
  if (!listaAgregada) { 
    const lista = dom.newE("ul")
    lista.className = "lista d-flex gap-3 flex-column"
    lista.innerHTML=`
    <li><span class="material-symbols-outlined">
    location_on
    </span>${datos[0].city}, ${datos[0].country}</li>
    <li><span class="material-symbols-outlined">
    location_on
    </span>${datos[1].city}, ${datos[1].country}</li>
    <li><span class="material-symbols-outlined">
    location_on
    </span>${datos[7].city}, ${datos[7].country}</li>
    <li><span class="material-symbols-outlined">
    location_on
    </span>${datos[5].city}, ${datos[5].country}</li>
    `
    list.appendChild(lista)
    listaAgregada = true; 
  }
}

function verifyClick(e) {
  if (!inputElement.contains(e.target)) {
    list.innerHTML = '';
    listaAgregada = false; 
  }
}

inputElement.addEventListener('click', ListLugares);
document.addEventListener('click', verifyClick);




//-----------
const inputElement2 = dom.caja("#getguest")
const guests = dom.caja("#guests")



inputElement2.addEventListener("click", () => {
  guests.classList.remove("d-none");
});


// filtro fguests
const getguest = dom.caja("#getguest")
const menosA = dom.caja("#menosA")
const masA= dom.caja("#masA")
const adults= dom.caja("#adults") 
const child = dom.caja("#child")
const menosC = dom.caja("#menosC")
const masC = dom.caja("#masC")

let countA = 0 
let countC = 0

menosA.addEventListener("click",()=>{
  if(countA > 0){
    countA = countA -1
    adults.value = countA
    let suma = parseInt(child.value) + parseInt(adults.value)
    getguest.value = suma
  }
})

masA.addEventListener("click",()=>{
  if(countA < 10){
    countA = countA +1
    adults.value = countA
    let suma = parseInt(child.value) + parseInt(adults.value)
    getguest.value = suma
  }
})

menosC.addEventListener("click",()=>{
  if(countC > 0){
    countC = countC -1
    child.value = countC
    let suma = parseInt(child.value) + parseInt(adults.value)
    getguest.value = suma
  }
})

masC.addEventListener("click",()=>{
  if(countC < 10){
    countC = countC +1
    child.value = countC
    let suma = parseInt(child.value) + parseInt(adults.value)
    getguest.value = suma
  }
})

