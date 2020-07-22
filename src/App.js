import React from "react";
import Profile from "./profile/Profile"
const prof = [{ Bio: `I'm an active student in GMC`, Profession: 'Web developer' }]

function App() {
    return ( 
    <div className = "App" >
        <Profile x = { prof } > < img style ={ {  width: '500px', height: '500px' }} src = "./images/avatar.jpg"alt = "avatar" /> </Profile >
        </div>
    );
}

export default App;