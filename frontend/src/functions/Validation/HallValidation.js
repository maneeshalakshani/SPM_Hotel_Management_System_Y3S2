export const hallValidity = (vInput, errInput, type) => {
    let returnVal = true;

    if(vInput.name === ''){
        errInput.nameErr.style.visibility = 'true'
        errInput.nameErr.innerHTML = 'Please Enter the Hall Name'
        errInput.nameErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.nameErr.style.visibility = 'false'
        errInput.nameErr.innerHTML = null
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