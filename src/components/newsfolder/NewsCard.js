/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./News.css";

const NewsCard = ({ topheadline }) => {

  return (
    <div>
    
      <div class="card news-card">
        <img
          className="card-img-top"
          src={topheadline.urlToImage}
          alt="news pic"
        />
        <div class="card-body">
          <h4 class="card-title">
            {topheadline.description === null
              ? null
              : topheadline.description.slice(0, 180)}
          </h4>
          <p class="card-text"></p>
          <a href={topheadline.url} target="_blank" className="btn btn-primary">
            read more !
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
// author: null
// content: "There is no harm in acknowledging that you need time for rest and recovery
// ↵Highlights
// ↵<ul><li>Not taking rest days can increase risk of injury
// ↵</li><li>It can reduce exercise performance and nega… [+3310 chars]"
// description: "Workout tips: The importance of rest and recovery cannot be stressed enough. Read here to know how taking sufficient rest days can help you achive your target fitness and weight loss goals."
// publishedAt: "2020-08-19T06:05:06Z"
// source: {id: null, name: "NDTV News"}
// title: "Weight Loss Tips: Taking Rest Days Can Keep You From Quitting Exercising- Know How - NDTV"
// url: "https://www.ndtv.com/health/weight-loss-tips-taking-rest-days-can-keep-you-from-quitting-exercising-workout-tips-2281750"
// urlToImage: "https://c.ndtvimg.com/2020-08/cto5e1no_sleep_625x300_12_August_20.jpg"
