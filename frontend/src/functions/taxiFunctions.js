import axios from 'axios';

export const addTaxi = async (taxi) => {
    axios.post('http://localhost:8082/taxi/add', taxi, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res) => {
        alert("Taxi Added Sucessfully")
    }).catch((err) => {
        console.log('err', err)
    })
}