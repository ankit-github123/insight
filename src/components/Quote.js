import React from "react"
import axios from "axios"
import { parseJsonSourceFileConfigFileContent } from "typescript";

function IsEmpty(val) { 
  // test results
  //---------------
  // []        true, empty array
  // {}        true, empty object
  // null      true
  // undefined true
  // ""        true, empty string
  // ''        true, empty string
  // 0         false, number
  // true      false, boolean
  // false     false, boolean
  // Date      false
  // function  false

  if (val === undefined) return true;

  if (
    typeof val == "function" ||
    typeof val == "number" ||
    typeof val == "boolean" ||
    Object.prototype.toString.call(val) === "[object Date]"
  )
    return false;

  if (val == null || val.length === 0)
    // null or 0 length array
    return true;

  if (typeof val == "object") {
    // empty object

    var r = true;

    for (var f in val) r = false;

    return r;
  }

  return false;
}
function Quote() {
   

    const [present,setpresent] = React.useState([])
  


    React.useEffect(() => {
      const url ="https://type.fit/api/quotes";
      axios.get(url).then(function(res){
  
          console.log(res.data)
          let dataArray = res.data;
          setpresent(dataArray);
   
      });
     
    },[]);
    console.log(present,"lloiiiiiiiiiiiiiiiiiiiii");
  return (  <section id="quote-sec">
  <div className="container-fluid">
  <img className="double-quote-begin" src="https://img.icons8.com/officexs/64/000000/quote-left.png"/>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
      <div>
      { IsEmpty(present)? console.log(present[0],"rrrrrrrrrrrrrreeeeeeeeeeeeeeeee") : ""}
      {present.map((item,id) =>{
      return(
        <div class="carousel-item">
          <h2 class="testimonial-text">{item.text}</h2>
          <img class="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>
          <em>{item.author}</em>

        </div>
      )}
      )}
        
        {/* <div class="carousel-item">
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/>
          <em>Beverly, Illinois</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/>
          <em>Beverly, Illinois</em>
        </div> */}

       </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
	</div> 
    <div className="double-quote-end">
          <img src="https://img.icons8.com/officexs/64/000000/quote-right.png"/>
          </div>     
          </div>
            
    </section>
  )
}

export default Quote

{/* <img src="https://img.icons8.com/officexs/64/000000/quote-left.png"/>
<img src="https://img.icons8.com/officexs/64/000000/quote-right.png"/> */}