export const taxiValidity = (vInput, errInput, type) => {
    let returnVal = true;

    if(vInput.type === ''){
        errInput.typeErr.style.visibility = 'true'
        errInput.typeErr.innerHTML = 'Please Enter Type'
        errInput.typeErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.typeErr.style.visibility = 'false'
        errInput.typeErr.innerHTML = null
      }
  
      if(vInput.price === ''){
        errInput.priceErr.style.visibility = 'true'
        errInput.priceErr.innerHTML = 'Please Enter Price'
        errInput.priceErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.priceErr.style.visibility = 'false'
        errInput.priceErr.innerHTML = null
      }
  
      if(vInput.seats === ''){
        errInput.seatErr.style.visibility = 'true'
        errInput.seatErr.innerHTML = 'Please Enter No of seats'
        errInput.seatErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.seatErr.style.visibility = 'false'
        errInput.seatErr.innerHTML = null
      }

      if(vInput.driver === ''){
        errInput.driverErr.style.visibility = 'true'
        errInput.driverErr.innerHTML = 'Please select driver'
        errInput.driverErr.style.color = 'red'
        returnVal = false;
      }else{
        errInput.driverErr.style.visibility = 'false'
        errInput.driverErr.innerHTML = null
      }

      if(type !== 'update'){
        if(vInput.image === ''){
          errInput.imageErr.style.visibility = 'true'
          errInput.imageErr.innerHTML = 'Please select image'
          errInput.imageErr.style.color = 'red'
          returnVal = false;
        }else{
          errInput.imageErr.style.visibility = 'false'
          errInput.imageErr.innerHTML = null
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