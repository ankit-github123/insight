import React, { useState, useEffect } from "react";
import laughingpic from "./laughing.gif"
import axios from "axios"
import Carosal from "./Carosal"

const JokesMain = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
    const [activeState, setactiveState] = useState([]);
    useEffect(() => {
        const response = axios.get("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/50").then((res) => {
          setactiveState(res.data);
          
        });
      }, []);
    return <div className="jokes-main" style={{backgroundImage:"linear-gradient(to left bottom, #d5dc56d0, #bfdc55d7, #a4db57d3, #87da5dd5, #65d865cb, #50d772d7, #36d57ec5, #00d389bb, #09d198bb, #20cfa3c5, #34ccabcb, #48c9b3ce),url("+laughingpic+")"}}>
        <Carosal data={activeState} code="1"/>
    </div>
}

export default JokesMain