import React, { useState } from "react";
import DropDown from "./DropDown";
import HamburgerDropDown from "./HamburgerDropDown";
import { BrowserRouter as Router,Link } from "react-router-dom";
function Header() {
  const [stream, setStream] = useState(false);
  const [ham, setHam] = useState(false);
  const [code,setcode]=useState(0);
  function Stm() {
    return <div className="stream">ankit</div>;
  }
  const handleoff = (action) => {
    setStream(action);
  }
  const handleHam = () => {
    ham === false ? setHam(true) : setHam(false);
    console.log(ham);
  };
  const handleStream1 = (action) => {
    setStream(action);
    setcode(1);
  };
  const handleStream2 = (action) => {
    setcode(2)
    setStream(action);
  };

  return (
    <div
      className="header container-fluid"
      style={{ zIndex: "100", backgroundColor: {} }}
    >
      <div className="row">
        <div className="header-logo col-lg-1 col-md-1 col-sm-1">
        <Link to="/"> <img
            className="header-logo-img"
            
            src="https://i.ibb.co/q04zHPh/logo.png"
          /></Link>
      

        </div>
        <div className="col-lg-11 col-md-10 col-sm-11 head-items-colect">
          <h3
            style={{
              display: "inline",
              position: "absolute",
              top: "1px",
              left: "197px",
            }}
          >
            <span
              className="header-items active"
              style={{ textDecoration: "none" }}
            >
             <Link to="/" className=" link-font">Home</Link> 
            </span>
            <span
              className="header-items"
              
             
            >
              <Link to="xstream" className=" link-font">X Stream</Link>{" "}
              
            </span>
            <span
              className="header-items"
              onMouseOver={(e) => handleStream1(true)}
            >
              <Link to="news" className=" link-font">News</Link><i class="fas fa-chevron-down fa-0.5x"></i>
            </span>
            <span className="header-items" onMouseOver={(e) => handleStream2(true)}>
              Blog<i class="fas fa-chevron-down fa-0.5x"></i>
            </span>
            <span className="header-items " onMouseOver={()=>handleoff(false)}><Router><Link to="about" className=" link-font">About</Link></Router></span>
          </h3>
          <div className="hamburger" onClick={(e) => handleHam()}>
            <div className="hamburger-lines"></div>
            <div className="hamburger-lines"></div>
            <div className="hamburger-lines"></div>
          </div>
          <button class="button-head ">
            <span>
              <Link to="getstarted" className="link-font">Get Started</Link>{" "}
            </span>
          </button>
        </div>
        <div>
          {stream ? <DropDown handleRef={() => handleStream1()} code={code} /> : null}
        </div>
      </div>
      <div>{ham ? <HamburgerDropDown handleHam={handleHam}/> : null}</div>
    </div>
  );
}
export default Header;
