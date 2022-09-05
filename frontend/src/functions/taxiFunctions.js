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

export const getAllTaxis = async () => {
    let taxis = axios.get('http://localhost:8082/taxi/getAllTaxis').then((res) => {
        let allTaxis = res.data.Result;
        return allTaxis;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return taxis;
}

export const deleteTaxi = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/taxi/deleteTaxi/${id}`).then((res) => {
        
        })
    }catch(err){
        console.log("Error", err)
    }
}