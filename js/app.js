
import data from "./data.js";
import dom from "./dom.js";

const URL = './stays.json'

//llamamos a la funcion host

const slices = dom.caja('#slices');

const datos = await data.getData(URL);


datos.forEach( element => {
  // Creamos el card con la informacion del elemento
  const card = dom.newCard(element);
  // Agregamos el card al elemento slices
  slices.append(card);

})

