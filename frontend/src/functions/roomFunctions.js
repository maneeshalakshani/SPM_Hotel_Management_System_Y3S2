import axios from 'axios';

export const addRoom = async (room) => {
    axios.post('http://localhost:8082/rooms/', room, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res) => {
        alert("Room Added Sucessfully")
    }).catch((err) => {
        console.log('err', err)
    })
}

export const getAllRooms = async () => {
    let rooms = axios.get('http://localhost:8082/rooms/').then((res) => {
        let allRooms = res.data.Result;
        return allRooms;
    }).catch((err) => {
        console.log('Error: ', err)
    }) 
    return rooms;
}

export const getRoom = async (id) => {
    let room = await axios.get(`http://localhost:8082/rooms/${id}`).then((res) => {
        let roomObj = res.data.Result;
        return roomObj;
    }).catch((err) => {
        console.log("Error", err)
    })
    return room;
}

export const updateRoom = async (id, room) => {
    await axios.put(`http://localhost:8082/rooms/${id}`, room, {
        headers: {'Content-type': 'multipart/form-data'} 
    }).then((res) => {
        alert("Room Details Updated Sucessfully");
    }).catch(err => {
        console.log("Error: ", err)
    })
}

export const deleteRoom = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/rooms/${id}`).then((res) => {
            // alert("Room Deleted Sucessfully")
        })
    }catch(err){
        console.log("Error", err)
    }
}