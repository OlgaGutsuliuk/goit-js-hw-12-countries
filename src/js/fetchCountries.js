const baseUrl = 'https://restcountries.eu/rest/v2/name/' 
function fetchCountries(searchQuery){
    return fetch(`${baseUrl}${searchQuery}`)
    .then(response=>response.json())
}
export default {fetchCountries}