import React, { Component } from "react"

class SearchBar extends Component {
    state = {term :""};
    onInputChange = (event) => {
        this.setState({term:event.target.value})

    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onsubmit(this.state.term);
    }
    render () {
        return (
    <div className="input-group youtube-box">
      <form onSubmit={this.onFormSubmit}>      
    <input type="text" value={this.state.term} onChange={this.onInputChange} className="form-control"/>
    <div className="input-group-append">
      <span onClick={()=>this.onFormSubmit()} className="input-group-text search-youtube-icon">🔍</span>
      
    </div>
    </form>
    </div>

    
        )
    }
}

export default SearchBar

{/* <form onSubmit={this.onFormSubmit} className="">

<label>Video Search</label>
    <input className="" value={this.state.term} onChange={this.onInputChange} type="text" placeholder="Search videos..."/>
    <i className="search icon"></i>

</form> */}