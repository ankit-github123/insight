import React, { useState } from "react";
import "./cardsignup.css";
import leftsign from "./leftsign.PNG";
import rightsign from "./rightsign.PNG";
function CardSignup() {
  const [signme, setsignme] = useState(0);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  return (
    <div className="card-sign">
    {console.log(signme)}
      <h3 className="cardsign-title">
        {signme === 0
          ? " Hi 🖐 What's your name ?"
          : signme === 2
          ? "Now Enter Your E-mail 💌"
          : "Thank You " + fname + lname}
      </h3>
      <div className="cardsign-text">
        {signme === 0 ? (
          <div className="">
            <input
              type="text"
              onChange={(e) => setfname(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              onChange={(e) => setlname(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        ) : signme === 2? (
          <input
            type="email"
            style={{ width: "27rem", margin: "auto 8.5rem" }}
            onChange={(e) => setemail(e.target.value)}
            placeholder="e-mail"
            className="email-text"
          />
        ) : (
          <input
            type="email"
            style={{
              width: "27rem",
              margin: "auto 8.5rem",
              visibility: "hidden",
            }}
            onChange={(e) => setemail(e.target.value)}
            placeholder="e-mail"
          />
        )}
      </div>
      {signme === 0 ? (
        <button
          type="button"
          onClick={() => setsignme(2)}
          className="btn btn-info btn-card-sign"
        >
          Sign Me !
        </button>
      ) : signme === 2 ? (
        <button
          type="button"
          onClick={() => setsignme(3)}
          className="btn btn-info btn-card-sign"
        >
          Email Me !
        </button>
      ) : (
        <button
          type="submit"
          onClick={() => setsignme(3)}
          style={{ visibility: "hidden" }}
          className="btn btn-info btn-card-sign"
        >
          Email Me !
        </button>
      )}
      <div className="sign-img">
        <img className="leftsign" src={leftsign} />
        <img className="rightsign" src={rightsign} />
      </div>
    </div>
  );
}
export default CardSignup;
