import {error, defaultModules} from '@pnotify/core'

function errorSpecific(){
    error({
    text: 'Сделай запрос более специфичным!',
    delay: 2000,
    });
  }
  
  export default {errorSpecific}  
  