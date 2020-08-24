import React from "react";
import { Link ,BrowserRouter as Router} from "react-router-dom";
import "./flipcard.css";
const FlipCardsub = ({ image, info, fliplink,title,text,c1,c2 }) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card flipcard-card">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{title}</h4>
              <p class="card-text">
                {text}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{c1}</li>
              <li class="list-group-item">{c2}</li>
              <li class="list-group-item temp-flip1">Fast and Secure</li>
              <li class="list-group-item temp-flip2"><Link to={fliplink}>
            <button type="button" className="btn btn-light btn-lg btn-ptr" style={{padding:"0.7px 25px"}}>
              Clickme!
            </button>
            </Link></li>
            </ul>
          </div>
        </div>
        <div class="flip-card-back">
          <h1>{info}</h1>
          <p>Architect & Engineer</p>
          <p style={{ letterSpacing: "2px", marginTop: "19px" }}>
            Please click on the link to explore {fliplink}
          </p>
          <div>
          <Link to={fliplink}>
            <button type="button" className="btn btn-light btn-lg btn-ptr">
              Clickme!
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlipCardsub;
