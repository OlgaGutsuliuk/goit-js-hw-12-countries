import countriesTamplate from '../tamplates/countries.hbs'
import countriesList from '../tamplates/countriesList.hbs'
import api from './fetchCountries.js'
import {error, defaultModules} from '@pnotify/core'
import



const input = document.querySelector('input')
input.addEventListener('input', inputSubmit)

function inputSubmit(e){
const inputValue = e.target.value
api.fetchCountries(inputValue)
.then(data=>{
  if (data.length ===1){
  renderCountries(data)  
  }
  else if(data.length>= 2 && data.length<=10){
  markupCountriesList(data)    
  }
  else if(data.length> 10){
error({
text: 'Notice me, senpai!'
});
}
}).catch(errorCountries)
}
function renderCountries(data){
    const contryMarkup = document.querySelector('.countries').innerHTML = countriesTamplate(data)   
}

function markupCountriesList(data){
    const contryMarkupList = document.querySelector('.countries').innerHTML = countriesList(data)  
}

function errorCountries(){ 
error({
text: 'help'
});
}



    

