import React, { useState } from "react";

function Carousel({ data, code }) {
  const [curItem, setCurrentItem] = useState(0);

  function goToPrevItem() {
    setCurrentItem(curItem ? curItem - 1 : 0);
  }

  function goToNextItem() {
    setCurrentItem(curItem < data.length - 1 ? curItem + 1 : data.length - 1);
  }

  return (
    <div className="carousel">
      {code === "0" ? (
        <div class="wordart radial">
          <span class="wordart-text">Famous Quotes</span>
        </div>
      ) : (
        <div class="wordart radial">
          <span class="wordart-text">Jokes & Riddles</span>
        </div>
      )}
      <div className="carousel-items">
        <img
          className="quote-img-left"
          src="https://img.icons8.com/officexs/64/000000/quote-left.png"
        />

        {code === "0"
          ? data.map(({ author, text }, itemIndex) => (
              <div
                className={
                  itemIndex === curItem
                    ? `carousel-item active`
                    : `carousel-item`
                }
                key={`carousel-item-${itemIndex}`}
              >
                {/* <img className="quote-image" src = {pic} /> */}
                <h1 className="quote-heading">{author}</h1>
                <p className="quote-paragraph">{text}</p>
              </div>
            ))
          : data.map(({ setup, punchline }, itemIndex) => (
              <div
                className={
                  itemIndex === curItem
                    ? `carousel-item active`
                    : `carousel-item`
                }
                key={`carousel-item-${itemIndex}`}
              >
                {/* <img className="quote-image" src = {pic} /> */}
                <h1 className="joke-heading">{setup}</h1>
                <p className="joke-paragraph">{punchline}</p>
              </div>
            ))}
        <img
          className="quote-img-right"
          src="https://img.icons8.com/officexs/64/000000/quote-right.png"
        />
      </div>
      <div className="carousel-nav">
        {code === "0" ? (
          <button
            type="button"
            className="yyyyy carousel-nav__btn carousel-nav__btn--prev quote-button"
            onClick={goToPrevItem}
            disabled={!curItem}
          >
            ⟪
          </button>
        ) : (
          <button
            type="button"
            className="yyyyy carousel-nav__btn carousel-nav__btn--prev laugh-button"
            onClick={goToPrevItem}
            disabled={!curItem}
          >
            ⟪
          </button>
        )}
        {code === "0" ? (
          <button
            type="button"
            className="fvcbc carousel-nav__btn carousel-nav__btn--next quote-button"
            onClick={goToNextItem}
            style={{ right: "0.5%" }}
            disabled={curItem === data.length - 1}
          >
            ⟫
          </button>
        ) : (
          <button
            type="button"
            className=" carousel-nav__btn carousel-nav__btn--next laugh-button"
            onClick={goToNextItem}
            style={{ right: "0.5%" }}
            disabled={curItem === data.length - 1}
          >
            ⟫
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
