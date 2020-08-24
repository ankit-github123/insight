import React from "react";
import image from "./happy.jpg";
import CardSignup from "./CardSignup";
function Image() {
  return (
    <div className="container-fluid">
      <div className="row" style={{}}>
        <div
          className="col-lg-5  "
          style={{ zIndex: "0", paddingTop: "25px", paddingLeft: "15px" }}
        >
          <img className="happy-img" src={image}></img>
        </div>
        <div className="col-lg-7  img-right">
          <h1 className="anim">
            Every Moment
            <span style={{ textAlign: "justify", padding: "0 auto" }}>
              {" "}
              Matters
            </span>
            <span style={{ color: "brown" }}>*</span>
          </h1>
          <p>
            Entertainment is in art like color in pictures.Entertainment can add
            salt in this discomfort and distasteful life. It is the way of
            entertainment which keeps the life going. Else life becomes very
            dull and boring. Entertainment gives the life its charm and energy.
          <br/>
        <b> Please Visit the website to expore more ways of being entertained.</b>
          </p>
          <CardSignup />
        </div>
      </div>
    </div>
  );
}
export default Image;
//fontFamily:"'Baloo Da 2'
//youtube.com/watch?v=uRTy7MOkGHM
