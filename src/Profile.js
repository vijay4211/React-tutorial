import {useState} from "react"

function Profile(){
    // define state
    const [loggedIn, setLoggedIn] = useState(3);

    return(
        <div>
            {
              loggedIn==1 ? 
              <h2>Welcome User 1</h2> 
              : loggedIn==2 ? <h2>Welcome User 2</h2> 
              : <h2>Welcome User 3</h2> 
            }
        </div>
    )
}
export default Profile;