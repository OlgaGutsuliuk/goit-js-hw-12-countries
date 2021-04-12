import countriesTamplate from '../tamplates/countries.hbs'
import countriesList from '../tamplates/countriesList.hbs'
import api from './fetchCountries.js'
import inputError from './error.js'
import debounce from 'lodash.debounce'


const input = document.querySelector('input')
input.addEventListener('input', debounce(inputSubmit, 500))

function inputSubmit(e){
  const inputValue = e.target.value
  api.fetchCountries(inputValue)
  .then(checkData)
  clearCountries()
}

function checkData(data){
  if (data.length ===1){
    renderCountries(data)  
  }
  else if(data.length>= 2 && data.length<=10){
    markupCountriesList(data)    
  }
  else if(data.length > 10){
    inputError.errorSpecific()
  }
}

function clearCountries(){
  const countryMarkup = document.querySelector('.countries').innerHTML = '';
}

function renderCountries(data){
  const countryMarkup = document.querySelector('.countries').innerHTML = countriesTamplate(data)   
}

function markupCountriesList(data){
  const countryMarkupList = document.querySelector('.countries').innerHTML = countriesList(data)  
}






    

