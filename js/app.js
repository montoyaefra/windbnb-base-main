
import data from "./data.js";
import dom from "./dom.js";

const URL = './stays.json'


const datos = await data.getData(URL);

dom.showCards(datos)

const location = dom.caja('#firstlocation');

location.addEventListener("keyup", ()=>{
  let filtro = location.value;

  const filtered = filtro == " "? datos : data.filterByLocation(datos, filtro);

  dom.showCards(filtered);
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
  const finlad = dom.caja("#place").innerHTML = datos[0].country;
} else {
  console.log('Not all data has a country property.');
}

const stays = dom.caja("#stays").innerHTML=`${datos.length}`
//-------- 

const inputElement = document.getElementById("firstlocation");
const list = dom.caja("#lista");
let listaAgregada = false;

function ListLugares() {
  if (!listaAgregada) { 
    const lista = dom.newE("ul")
    lista.className = "lista d-flex gap-3 flex-column"
    lista.innerHTML=`
    <li>${datos[0].city}, ${datos[0].country}</li>
    <li>${datos[1].city}, ${datos[1].country}</li>
    <li>${datos[7].city}, ${datos[7].country}</li>
    <li>${datos[5].city}, ${datos[5].country}</li>
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



// boton
const boton = dom.caja("#boton");

boton.addEventListener("click", (e) => {
  alert("Este botón está en mantenimiento");
  e.preventDefault()
});
//-----------
const inputElement2 = dom.caja("#getguest")
const guests = dom.caja("#guests")
let guestAgregado = false

function numguest(){
  if(!guestAgregado){
    const guest = dom.newE("div")
    guest.className="guest d-flex flex-row flex-wrap"
    guest.innerHTML =`
            <div class="">
              <p class="d-flex flex-column">
                <span class="fw-semibold">Adults</span>
                <span class="text-body-secondary">Ages 13 or above</span>
              </p>
              <div class="align-items-center grid d-flex ">
                <span class="border col-1 d-flex justify-content-center" role="button">-</span>
                <input class="border border-0 text-center col-2" type="text" />
                <span class="border col-1 d-flex justify-content-center" role="button">+</span>
              </div>
            </div>
            <div>
              <p class=" d-flex flex-column">
                <span class="fw-semibold">Children</span>
                <span class="text-body-secondary">Ages 2-12</span>
              </p>
              <div class="align-items-center grid d-flex">
                <span class="border col-1 d-flex justify-content-center" role="button">-</span>
                <input class="border border-0 text-center col-2" type="text"/>
                <span class="border col-1 d-flex justify-content-center" role="button">+</span>
              </div>
            </div>
      
    `
    guests.appendChild(guest)
    guestAgregado = true
  }
}

function verifyGuest(e) {
  if (!inputElement2.contains(e.target)) {
    guests.innerHTML = '';
    guestAgregado = false; 
  }
}

inputElement2.addEventListener('click', numguest);
document.addEventListener('click', verifyGuest);