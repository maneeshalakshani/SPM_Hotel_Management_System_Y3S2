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

// export const getAllRooms = async () => {
//     let rooms = axios.get('http://localhost:8082/rooms/').then((res) => {
//         let allRooms = res.data.Result;
//         return allRooms;
//     }).catch((err) => {
//         console.log('Error: ', err)
//     }) 
//     return rooms;
// }

// // export const updateRoom = async (room) => {
// //     axios.post('http://localhost:8082/rooms/', room, {
// //         headers: {
// //             'Content-type': 'multipart/form-data',
// //         }
// //     }).then((res) => {
// //         alert("Taxi Added Sucessfully")
// //     }).catch((err) => {
// //         console.log('err', err)
// //     })
// // }

// export const deleteRoom = async (id) => {
//     try{
//         await axios.delete(`http://localhost:8082/rooms/${id}`).then((res) => {
//         })
//     }catch(err){
//         console.log("Error", err)
//     }
// }