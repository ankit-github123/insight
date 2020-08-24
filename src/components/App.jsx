import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Header from "./Header"
import YoutubeMain from "./youtube api/YoutubeMain";
import GetStart from "./GetStart";
import QuotesMain from "./QuotesMain"
import JokesMain from "./JokesMain"
import TriviaMain from "./TriviaMain"
import Footer from "./Footer";
import NewsMain from "./newsfolder/News";
import About from "./about-page/About";
class App extends Component {
    render () {
    return <div>
     
    <Router>
    <Header />
        <Switch>
        
        <Route exact path="/" component={Home} />
        <Route path="/xstream" component={YoutubeMain} />
        <Route path="/getstarted" component={GetStart}/>
        <Route path="/jokes" component={JokesMain}/>
        <Route path="/quotes" component={QuotesMain}/>
        <Route path="/trivia-questions" component={TriviaMain}/>
        
        <Route path="/news" component={NewsMain}/>
        <Route path="/about" component={About}/>
        </Switch>
        <Footer/>
    </Router>
    
   
    </div>
    }
}

export default App;
