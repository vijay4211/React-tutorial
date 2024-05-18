import {useState} from "react";

function Login(){

// define state
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

// create function
function loginHandle(e){

    if(user.length <3 || password.length <3){
        alert("type correct values");
    }else{
        alert("all good");
    }

    // console.log(e);
    e.preventDefault();
}

function userHandler(e){
    let item = e.target.value; 
    if(item.length < 3){ 
        // console.log("invalid");
        setUserErr(true);
    }else{
        setUserErr(false);
    }
    setUser(item);

    // console.log(e.target.value);
    // console.log(e.target.value.length);
}

function passwordHandler(e){
    let item = e.target.value; 
    if(item.length < 3){ 
        setPassErr(true);
    }else{
        setPassErr(false);
    }
    setPassword(item);
}

    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{userErr ? <span>User Not Valid</span> : ""}
            <br /><br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr ? <span>Password Not Valid</span> : ""}
            <br /><br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;