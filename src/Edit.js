import React, { useRef, useState } from "react";
import { Router } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Create.css';




function Edit() {
const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    title: localStorage.getItem("title") ,
    image: localStorage.getItem("image") ,
    description: localStorage.getItem("description")
  });
  
  useEffect(()=>{
      document.getElementById("title").value = localStorage.getItem("title")
      document.getElementById("image").value = localStorage.getItem("image")
      document.getElementById("description").value = localStorage.getItem("description")
  },[])
 
  // var some=JSON.parse(localStorage.getItem("cardedit"))
  // const[cardtitle,setCardTitle]=useState(
    
  //   JSON.parse(localStorage.getItem("cardedit")).title? JSON.parse(localStorage.getItem("cardedit")).title:" ")
  //   const[carddescription,setCardDescription]=useState(
  //     JSON.parse(localStorage.getItem("cardedit")).description? JSON.parse(localStorage.getItem("cardedit")).description:"")
  //     //console.log(JSON.parse(localStorage.getItem("cardedit")), "I am cardedit")
  //     const[cardimage,setCardImage]=useState(
  //       JSON.parse(localStorage.getItem("cardedit")).image? JSON.parse(localStorage.getItem("cardedit")).image:"")


// var handleTitle =(e) =>{
//     setCardTitle(e.target.value);
// }

// var handleImage =(e) =>{
//     setCardImage(e.target.value); 
// }

// var handleDescription =(e) =>{
//     setCardDescription(e.target.value);
// }

 
const handlesubmit=(e)=>{
  e.preventDefault()
      var data = JSON.parse(localStorage.getItem("cards3")).data
      // console.log("edit",data)
      for (let i = 0; i < data.length; i++) {
        if (data[i].title===localStorage.getItem("title")){
          data[i].title = formdata.title
          data[i].image = formdata.image
          data[i].description = formdata.description
        }
      }
      data = {data:data}
      // console.log(data)
      localStorage.setItem("cards3",JSON.stringify(data))
      navigate("/");

   }

   const handleChange = (e) => {
   var input = e.target.name
   setFormdata({...formdata, [input] : e.target.value})
  };

  console.log(formdata)
  

  return (
    <div>
      <div class="container">
        
        <form id="form" onSubmit={handlesubmit}>
        <div class="form-group">
          <label for="firstname">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter FirstName"
            onChange={handleChange}
            
            required
          />
        </div>
        <div className="form-group">
          <label for="lastname">imageUrl</label>
          <input
            type="text"
            id="image"
            class="form-control"
            name="image"
            placeholder="Enter url"
             onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="email">description</label>
          <input
            type="text"
            id="description"
            class="form-control"
            name="description"
            placeholder="Enter description"
            required
            onChange={handleChange}
          />
        </div>
       
      
          <button type="submit" className="btn btn-default" >
            Submit
          </button>
        
      </form>
      </div>
    </div>
  );
}

export default Edit;
