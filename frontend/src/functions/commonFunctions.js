export const getTest = async () => {
    try{
        const res = await fetch('http://localhost:8082/test', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': "application/json",
            }
        });

        return await res.json();
    }catch(err){

    }
}

export const register = async (userDetails) => {
    fetch('http://localhost:8082/register',{
        method: 'POST',
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.pw
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userRegister")
        alert("User Registerd Sucessfully")
        window.location.href = "./";
    });
}

export const Login = async (user) => {
    fetch('http://localhost:8082/login', {
        method: 'POST',
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("User Logged" , data)
        if(data.status === "OK"){
            window.localStorage.setItem("token", data.data);
            window.location.href = "./home";
        }else{
            alert("Wrong Password or email");
        }
    })
}

export const getUserData = async () => {
    let user = await fetch('http://localhost:8082/getData', {
        method: 'POST',
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            token: window.localStorage.getItem("token"),
        })
    })
    .then((res) => res.json())
    .then((data) => {
        return data['data'];
    })
    return user;
}