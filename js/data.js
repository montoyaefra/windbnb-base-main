
const getData = async (URL) => {

  return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error)

}

const filterByLocation = (arr, filtro) => {
  
  let filtered = arr.filter( elem => {
    return elem.city.toLowerCase().includes(filtro.toLowerCase()) || elem.country.toLowerCase().includes(filtro.toLowerCase())
  })

  console.log(filtered);
  return filtered
}


export default {
  getData,
  filterByLocation,
}

