import React from "react";
import Slider from "react-slick";
import NewsCard from "./NewsCard";
import "./News.css";
import LeftArrow from "./LeftArrow.png";
import RightArrow from "./RightArrow.png";

function ArrowButton(props) {
  const { className, style, onClick, arrow, RightArrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",
        display: "flex",
        zIndex: "99",
        fontSize:'20px',
        marginRight:`${RightArrow}`
      }}
      onClick={onClick}
    >
      <img src={arrow} alt="arrow" style={{width:'53px'}}  />
      {/* <i class="fas fa-chevron-left"></i> */}
    </div>
  );
}


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  initialSlide: 0,
  nextArrow: <ArrowButton arrow={RightArrow} RightArrow={'25px'}  />,
  prevArrow: <ArrowButton arrow={LeftArrow} />,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
const NewsSlider = ({ topheadlines,name,nameres }) => {
  return (
    <div>
      {nameres==="Search results: "?null:<h3>{nameres}</h3>}
      {name==="Search results: "?null:<h1>{name}</h1>}
      <div className="outer-slider">
        <Slider {...settings}>
          {topheadlines.map((topheadline) => {
            return <NewsCard topheadline={topheadline} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSlider;
