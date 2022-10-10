export const roomValidity = (vInput, errInput, type) => {
    let returnVal = true;

    if(vInput.type === ''){
        errInput.typeErr.style.visibility = 'true'
        errInput.typeErr.innerHTML = 'Please Select a Room Type'
        errInput.typeErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.typeErr.style.visibility = 'false'
        errInput.typeErr.innerHTML = null
      }
  
      if(vInput.price === ''){
        errInput.priceErr.style.visibility = 'true'
        errInput.priceErr.innerHTML = 'Please Enter Room Price'
        errInput.priceErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.priceErr.style.visibility = 'false'
        errInput.priceErr.innerHTML = null
      }
  
      if(vInput.features === ''){
        errInput.ftrErr.style.visibility = 'true'
        errInput.ftrErr.innerHTML = 'Please Select Room Features'
        errInput.ftrErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.ftrErr.style.visibility = 'false'
        errInput.ftrErr.innerHTML = null
      }

      if(vInput.description === ''){
        errInput.desErr.style.visibility = 'true'
        errInput.desErr.innerHTML = 'Please add a Description'
        errInput.desErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.desErr.style.visibility = 'false'
        errInput.desErr.innerHTML = null
      }

      if(type !== 'update'){
        if(vInput.image === ''){
          errInput.imagesErr.style.visibility = 'true'
          errInput.imagesErr.innerHTML = 'Please select an image'
          errInput.imagesErr.style.color = 'red'
          returnVal = false;
        }else{
          errInput.imagesErr.style.visibility = 'false'
          errInput.imagesErr.innerHTML = null
        }
      }

      return returnVal;
}


export const checkInputOnChange = (value, id, msg) => {
    let field = document.getElementById(id)

    if(value !== ''){
        field.style.visibility = 'false'
        field.innerHTML = null
    }else{
        field.style.visibility = 'true'
        field.innerHTML = msg
        field.style.color = 'red'
    }
}