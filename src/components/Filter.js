import React from "react";
import "./Filter.css";
const Filter = ({updateinput,updaterate}) => {
  
  return (
    <div className="search-header">
      <div className="search-content">
        <h1>Welcome to Movie App</h1>
        <form className="search">
          <input type="text"  placeholder="Search Movies with title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}>OR</span>
          <select className="search-rate" defaultValue={0} onChange={(e)=>updaterate(e.target.value)}>
          <option value ={0} >Search with rate</option>
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </form>
        
      </div>
    </div>
  );
};

export default Filter;