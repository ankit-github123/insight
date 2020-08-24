import React from "react";
import "./getstart.css";
import youtubepic from "./youtube.jpg";
import newspic from "./news.png";
import laughstart from "./laugh-start.gif";
import writerstart from "./writer-start.gif";
import triviastart from "./trivia-start.jpg";
import blog from "./blog.jpg";
const GetStart = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  return (
    <div className="container-fluid row getstartmain">
      <div className="col-lg-2"></div>
      <div className="col-lg-8 getstarted-body">
        <div class="card mb-3">
          <img src={youtubepic} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">X-Stream {"{Youtube}"}</h4>
            <p class="card-text">
              A video streaming website, <b>YouTube</b>, is in the top of 3 most
              visited websites globally, along with Facebook and Google. The
              “broadcast yourself” idea became incredibly popular and took over
              the world.
              <br />
              <br />
              <b>X Stream</b> uses youtube api to surf various videos on youtube
              with latency of 20ms.You can search on youtube and play them via
              iframe .
              <br />
              <br />
              It has become more then just a place where videos are uploaded for
              the whole world to see. There might be specific reasons as to why
              Youtube was invented, but the way it is being used by society has
              brought a whole new perspective.Youtube, just like many other
              social media apps, is generally used to share media, inform news,
              connect people, spread ideas, and used as a promoting website.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={newspic} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">News {"{news-api}"}</h4>
            <p class="card-text">
              <b>Online News</b> are one of the most important documents. They
              can be said to be the <b>powerhouse of information.</b> Moreover,
              they offer us other benefits as well which helps us in our lives.
              You become better informed through newspaper reading and it also
              broadens your perspective.
              <br />
              <br />
              <b>News link</b> uses <b>News api</b> to surf various news the
              internet with latency of 18ms.You can search on news and read all
              the current hot topics.
              <br />
              <br />
              <b>Online News reading</b> is one of the most beneficial habits.
              It helps us get acquainted with the current affairs of the world.
              We get to know about the latest happenings through a reliable
              source. Similarly, we also get an insight into the different
              domains including politics, cinema, business, sports and many
              more.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={laughstart} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Jokes & Riddles {"{jokes-api}"}</h4>
            <p class="card-text">
              <b>Jokes & Riddles</b> acts as a powerful antidote for pain,
              stress, and conflict. There is nothing that works faster in order
              to bring back mind and body into balance than a good laugh. Also,
              humor lightens your burden, connects you to others and keep you
              focused.
              <br />
              <br />
              <b>Jokes & Riddles Link</b> uses Jokes api to surf various jokes
              and Riddles the internet with latency of 30ms.You can easily read
              and scroll them as per your convenince and read them .
              <br />
              <br />
              <b> A riddle</b> is a word puzzle in which one player asks a
              confusing question, and the other player has to figure out its
              meaning. Riddles often rely on puns and double entendres – in
              other words, the key to solving the riddle is to realize that one
              of the words is being used in a surprising or unexpected way.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={writerstart} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Quotes & Thoughts {"{Quotes api}"}</h4>
            <p class="card-text">
              <b>Our thoughts have a power of their own.</b> If we know how they
              work and how to make use of them effectively, we can accomplish a
              lot more in our lives. Our thoughts reach out to others, through
              our words and expressions.
              <br />
              <br />
              <b>Quotes Api Link </b> uses Famous quotes api to surf various
              qoutes the internet with latency of 30ms.You can you view the
              thoughts of great personality (around 2500 thoughts) and get
              enlightenment from it .
              <br />
              <br />
              If you truly want to succeed in your life, you should mentally
              prepare for it and develop the necessary strength to withstand the
              problems and challenges that arise from it.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={triviastart} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">
              Trivia Questions {"{trivia-questions api}"}
            </h4>
            <p class="card-text">
              A <b>Quiz</b> is a form of game or mind sport, attempt to answer
              questions correctly. It is a game to test knowledge about a
              certain subject. In some countries, a quiz is also a brief
              assessment used in education and similar fields to measure growth
              in knowledge, abilities, and/or skills.
              <br />
              <br />
              <b>Quiz Link</b> uses Trivia-questions api to view and answer
              various logical and tricky questions online with latency of
              25ms.You can take your time and answer them and also view the
              solutions .
              <br />
              <br />
              <b>Online Quiz</b> is one of the most beneficial habits.
              It helps us get acquainted with the current affairs of the world.
              We get to know about the latest happenings through a reliable
              source. Similarly, we also get an insight into the different
              domains including politics, cinema, business, sports and many
              more.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={blog} class="card-img-top-1" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Blog {"{blog-api}"}</h4>
            <p class="card-text">
              <b>Blogging</b> is becoming so popular some are worried that it is
              widening the gray area between right and wrong/ fact and fiction.
              On the pro blogger side some say they do not publish anything that
              would get them sued or that they did not research thoroughly.
              Blogs are being used to speak on everything the main stream media
              is afraid to say.
              <br />
              <br />
              <b>Blog Link</b> uses BLog api to surf various Blogs online on the
              internet with latency of 9ms.You can search on Blogs and read all
              the current hot topics.
              <br />
              <br />
              Blogs are for freedom of expression criticizing them because of
              their factual content is not fair to the majority of people who
              view their blogs as somewhat of an online dairy viewable by the
              world.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
};

export default GetStart;
