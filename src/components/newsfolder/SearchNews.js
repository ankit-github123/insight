/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react"


const SearchNews = ({onsubmit,searchnews}) => {
    const [newsterm,setnewsterm] =useState("");
    const handlesubmit= () =>{
        onsubmit(newsterm);
 
 
    }
    return <div className="input-group-news">
    <input type="text" onChange={(e)=>{setnewsterm(e.target.value)}} className="form-control"/>
    <div className="input-group-append">
      <span onClick={()=>handlesubmit()} className="input-group-text search-news-icon">🔍</span>
      
    </div>
    </div>
}
export default SearchNews