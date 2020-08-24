import React from "react";
import FlipCardsub from "./FlipCardsub";
import pic1 from "./laugh-start.gif";
import pic2 from "./writer-start.gif";
import pic3 from "./trivia-start.jpg";
const FlipCard = () => {
  return (
    <div className="row container-fluid flipcard-row">
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub
          image={pic1}
          info={"Jokes & Riddles 😁"}
          fliplink={"jokes"}
          title={"Ramdom Jokes & Riddles"}
          text={"Jokes & Riddles Link are used to surf various jokes and Riddles on the internet and read them as per your convinence."}
          c1={"latency of 20ms"}
          c2={"Funny jokes & Logic Riddles"}
        />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub image={pic2} info={"Quotes ✍"} fliplink={"quotes"}  title={"Famous Quotes"}
          text={"Quotes Api Link uses Famous quotes api .You can you view the thoughts (2500 thoughts) and get enlightenment from it "}
          c1={"latency of 30ms"}
          c2={"Famous Personality quotes"}
        />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <FlipCardsub
          image={pic3}
          info={"Trivia Questions 👨‍🏫"}
          fliplink={"trivia-questions"}
          title={"Trivia-Questions"}
          text={"Quiz Link used to view questions and answer various logical and tricky questions online .You can also view the solutions ."}
          c1={"latency of 25ms"}  
          c2={"Tricky & Logical trivia questions"}   
          />
      </div>
    </div>
  );
};

export default FlipCard;
