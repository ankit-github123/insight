import React, { useState, useEffect } from "react";
import thinker from "./thinker.png"
import axios from "axios"
import CaruselQuiz from "./CaruselQuiz"

const TriviaMain = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
    const [start,setstart]=useState(false);
    const [activeState, setactiveState] = useState([]);
    useEffect(() => {
        const response = axios.get("https://opentdb.com/api.php?amount=50&category=17&difficulty=medium&type=multiple").then((res) => {
          setactiveState(res.data.results);
        });
      }, []);
      const handlestart = () => {
        setstart(true);
      }
    return <div className="trivia-main" style={{backgroundImage:"linear-gradient(to bottom, #ffc75fd0, #ffb65ce7, #ffa35cdc, #ff9060dc, #ff8066d8),url("+thinker+")"}}>
        <h1 className="trival-heading">Trivia Questions</h1>
        {start===false?<div className="ank">
        <button onClick={()=>handlestart()} className="quiz-button"><span>Start </span></button>
          </div>:<CaruselQuiz data={activeState} code={"55"}/>}
        
         </div>
}

export default TriviaMain