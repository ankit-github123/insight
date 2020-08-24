import React from "react"
import { BrowserRouter as Router ,Link} from "react-router-dom";
const HamburgerDropDown = ({handleHam}) => {

    return <div className="ham">
        <div id="myDropdown" className="dropdown-content">
   <Link exact to="/" onClick={()=>handleHam()}> <a className="" href="#home">Home</a></Link>
   <Link to="xstream" onClick={()=>handleHam()}> <a className="" href="#about">X Stream</a></Link>
   <Link to="news" onClick={()=>handleHam()}> <a className="" href="#contact">News</a></Link>
   <Link to="jokes" onClick={()=>handleHam()}> <a className="" href="#contact">Jokes</a></Link>
   <Link to="quotes" onClick={()=>handleHam()}> <a className="" href="#contact">Quotes</a></Link>
   <Link to="trivia-questions" onClick={()=>handleHam()}> <a className="" href="#contact">Trivia Questions</a></Link>
   <Link to="about" onClick={()=>handleHam()}> <a className="" href="#contact">About</a></Link>

  </div>

    </div>
}

export default HamburgerDropDown;