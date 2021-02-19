import React,{useState} from 'react';
import './AddMovie.css'

const AddMovie=({addMovie})=>{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[posterUrl,setPosterUrl]=useState("");
    const[trailler,setTrailler]=useState("");
    const[rate,setRate]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
       addMovie({
           id:Math.random(),
           title,
           description,
           posterUrl,
           rate,
           trailler
       })
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" className="input_text" placeholder="Title of the Movie" onChange={(e)=>{setTitle(e.target.value)}}  required/> <br/>
        <input type="text" className="input_text" placeholder="put some Description" onChange={(e)=>{setDescription(e.target.value)}} required/> <br />
        <input type="text" className="input_text" placeholder="put the url of the poster" onChange={(e)=>{setPosterUrl(e.target.value)}} required/> <br />
        <input type="text" className="input_text" placeholder="put the url of the trailler" onChange={(e)=>{setTrailler(e.target.value)}} required/> <br />
        <input type="number" min="1" max="5" className="input_text" placeholder="add a rate" onChange={(e)=>{setRate(parseInt(e.target.value))}} required/> <br />
        <input type="submit" value="Add movie" className="btn"/>
      </form>
    );
}

export default AddMovie;