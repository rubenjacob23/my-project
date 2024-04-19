import React from "react";
import './Home.css';
function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default Home;