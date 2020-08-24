import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import NewsSlider from "./NewsSlider";
import axios from "axios";
import SearchNews from "./SearchNews";

const News = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  const [search,setsearch]=useState("");
  const [searchnews, setsearchnews] = useState([]);
  const onTermSubmit = async (term) => {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: term,
        apiKey: "593844fddaf24b28a25ac0026eb70125",
      },
    });
    setsearchnews(response.data.articles);
    setsearch(term);
  };
  const [topheadlines, settopheadlines] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=593844fddaf24b28a25ac0026eb70125"
      )
      .then((res) => {
        settopheadlines(res.data.articles);
        console.log(res.data.articles);
      });
  }, []);


  const [bussiness, setbusniss] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=business&apiKey=593844fddaf24b28a25ac0026eb70125"
      )
      .then((res) => {
        setbusniss(res.data.articles);
        console.log(res.data.articles);
      });
  }, []);


  const [coronanews, setcoronanews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=corona&apiKey=593844fddaf24b28a25ac0026eb70125"
      )
      .then((res) => {
        setcoronanews(res.data.articles);
        console.log(res.data.articles);
      });
  }, []);
  
  return (
      <div>
    <div className="row" style={{marginRight:"0px"}}>
    <div className="col-lg-1">
            {/* <marquee><h4>news</h4></marquee> */}

      </div>
      <div className="col-lg-10">
        <SearchNews onsubmit={onTermSubmit} searchnews={searchnews} />
        <div className="container">
          {searchnews === null ? null : (
            <NewsSlider topheadlines={searchnews} nameres={"Search results: "+search} />
          )}
          <NewsSlider topheadlines={topheadlines} name="Top Headlines-India"/>
          <NewsSlider topheadlines={bussiness} name="Top Bussiness"/>
          <NewsSlider topheadlines={coronanews} name="Corona Pandemic"/>
        </div>
      </div>
      <div className="col-lg-1">
            {/* <marquee><h4>news</h4></marquee> */}

      </div>
    </div>
    <div class="news-footer">
 <div class="news-right">
   <span><b>News</b></span>
   </div>
<p class="text-news">
<marquee direction = "left">
 <span>• Coronavirus pandemic is going to get worse and worse and worse: WHO chieft</span>
 <span> &nbsp;• ‘Everyone is lying’: Trump undercuts public health officials in fresh attacks</span>
 <span> &nbsp;• Tesla’s Elon Musk Nears $2.4 Billion Haul as Stock Keeps Soaring</span>
 <span> &nbsp;•  SpaceX test-fires rocket for South Korean military satellite launch this week</span>
  </marquee>
</p>
</div>
    </div>
  );
};

export default News;
