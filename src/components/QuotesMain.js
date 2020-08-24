import React, { useState, useEffect } from "react";
import axios from "axios";
import Carosal from "./Carosal";
import writer from "./writer.jpg"
const QuotesMain = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });

  const [activeState, setactiveState] = useState([]);

  useEffect(() => {
    const response = axios.get("https://type.fit/api/quotes").then((res) => {
      setactiveState(res.data);
    });
  }, []);

  return (
    <div className="quotes-class-main" style={{backgroundImage:"linear-gradient(to right top, #d16ba5cb, #c777b8da, #b983cace, #aa8fd8cc, #9a9ae1, #8aa7ecda, #79b2f4d3, #69bff8d5, #52d0fed3, #41dfffd2, #46eefac5, #5ffbf1cc),url(" + writer+")"}} >
      <Carosal data={activeState} code="0" />
    </div>
  );
};

export default QuotesMain;
