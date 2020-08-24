import React, { useState } from "react";
import "./caruselquiz.css"
function CaruselQuiz({data,code}) {
  const [curItem, setCurrentItem] = useState(0);
    const [ans,setans] =useState(false)

  function goToPrevItem() {
    setCurrentItem(curItem ? curItem - 1 : 0);
    
  }

  function goToNextItem() {
    setCurrentItem(curItem < data.length - 1 ? curItem + 1 : data.length - 1);
    setans(false);
  }

  return (
    <div className={code==="55"? "carousel carousel-quiz":null}>
      {console.log(data)}
      <div className="carousel-items">
        
         { data.map((item, itemIndex) => {
            const options = [ ...item.incorrect_answers];
            const Random =Math.floor(Math.random()*3)
            options.splice(Random,0,item.correct_answer);
            console.log(options);
           return( 
          <div
            className={
              itemIndex === curItem ? `carousel-item active` : `carousel-item`
            }
            key={`carousel-item-${itemIndex}`}
          >
          
            <h1 className="trivia-carosal-heading">{item.question}</h1>
            <div className="container-fluid row option-ques">
              {options.map((option,index)=>{
                return <div className="col-lg-3 col-6 pd-10">
                  <h3 className="option-ques-h3">{index===0? "a)"+option:index===1?"b)"+option:index===2?"c)"+option:"d)"+option}</h3>
                </div>
              })}
            </div>
            <p className="trivia-paragraph">{ans===true? item.correct_answer:null}</p>
            <div className="trivia-button">
            {/* <button className="check-answer-button" onClick={()=>setans(true)}>Check Answer</button> */}
            <div class="container">

              <button class="bbtn btn-2"  onClick={()=>setans(true)}>check answer</button>

            </div>
            </div>
          </div>

          
        )})} 
      </div>
      <div className="carousel-nav">
        
        <button
          type="button"
          className="yyyyy carousel-nav__btn carousel-nav__btn--prev quote-button"
          onClick={goToPrevItem}
          disabled={!curItem}
          
        >
          ⟪
        </button>
        
        <button
          type="button"
          className="fvcbc carousel-nav__btn carousel-nav__btn--next quote-button"
          onClick={goToNextItem}
          style={{right:"0.5%"}}
          disabled={curItem === data.length - 1}
        >
          ⟫
        </button>
      </div>
    
        </div>)
        }

export default CaruselQuiz;
// 0:
// category: "Science: Computers"
// correct_answer: "True"
// difficulty: "medium"
// incorrect_answers: Array(1)
// 0: "False"
// length: 1
// __proto__: Array(0)
// question: "The HTML5 standard was published in 2014."
// type: "boolean"