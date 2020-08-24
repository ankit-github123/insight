import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";
import "./dropdown.css"
const DropDown = ({handleRef,code}) => {
    console.log(handleRef,"kkkkkkkkkkkkkkkkkk")
    return (
        <div className="container">
            {code===2? <div className="row dropdown" onMouseLeave={handleRef}>
                <div className="col-lg-4 dropdown-part">
                <i class="far fa-grin-squint-tears"></i>
                <Link to="jokes" className=" link-font">Random Jokes</Link>
                </div>
                <div className="col-lg-4 dropdown-part">
                    <i class="fas fa-feather"></i>
                    <Link to="quotes" className=" link-font">Famous Quotes</Link>
                </div>
                <div className="col-lg-4 dropdown-part">
                    <i class="fas fa-chalkboard-teacher"></i>
                   <Link to="trivia-questions" className=" link-font">Trivia Questions</Link>
                </div>
            </div>:
            <div className="row dropdown" onMouseLeave={handleRef}>
                <div className="col-lg-4 dropdown-part">
                <i class="far fa-file-alt"></i>
                <Link to="news" className=" link-font">Top Headlines</Link>
                </div>
                <div className="col-lg-4 dropdown-part">
                <i class="far fa-flag"></i>
                  <Link to="news" className=" link-font">India Today</Link>
                </div>
                <div className="col-lg-4 dropdown-part">
                    <i class="fas fa-viruses"></i>
                  <Link to="news" className=" link-font">Corona Headlines</Link>
                </div>
                </div>}
        </div>
    )
}
export default DropDown