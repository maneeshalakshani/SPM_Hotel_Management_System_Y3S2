import axios from 'axios';

export const addHall = async (hall) => {
    axios.post('http://localhost:8082/halls/', hall, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res) => {
        alert("Hall Added Sucessfully")
    }).catch((err) => {
        console.log('err', err)
    })
}

export const getAllHalls = async () => {
    let halls = axios.get('http://localhost:8082/halls/').then((res) => {
        console.log(res);
        let allHalls = res.data.Result;
        return allHalls;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return halls;
}

export const deleteHall = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/halls/${id}`).then((res) => {
        
        })
    }catch(err){
        console.log("Error", err)
    }
}

export const getHall = async (id) => {
    let hall = await axios.get(`http://localhost:8082/halls/${id}`).then((res) => {
        let hallObj = res.data.Result;
        return hallObj;
    }).catch((err) => {
        console.log("Error", err)
    })
    return hall;
}

export const updateHall = async (id, hall) => {
    console.log("jviofd;jviods;fjbiodrpgbjio")
    await axios.put(`http://localhost:8082/halls/${id}`, hall, {
        headers: {'Content-type': 'multipart/form-data'} 
    }).then((res) => {
        alert("Updated Sucessfully");
    }).catch(err => {
        console.log("Error: ", err)
    })
}