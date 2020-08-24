import React from "react"
import pic from "./Capture.PNG"
function Time() {
    const time = new Date();
    console.log(time);
    return (
        <section id="time">
            <div className="container-fluid">
                <img className=" center" src={pic}/>
            </div>
            
        </section>
    )
}

export default Time;