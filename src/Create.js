import React, { useRef, useState } from "react";
import { Router } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Create.css'


function Create() {
 
  var navigate = useNavigate();
 
  
  var title = useRef("");
  var image = useRef("");
  var description = useRef("");
  
  const handlesubmit = (e) => {
    e.preventDefault()
    var data = JSON.parse(localStorage.getItem("cards3")).data;
    var formdata = {title: title.current.value, image: image.current.value, description: description.current.value}
    console.log(formdata)
    data.push(formdata);
   //console.log(data,"i am data")
    data = {data:data}
   //console.log(data,"i am 2 nd data")
    localStorage.setItem("cards3",JSON.stringify(data));
    navigate("/");
  };


  return (
    <div>
      <div class="container">
        <h2>Shipping Adress</h2>
        <form id="form" onSubmit={handlesubmit}>
        <div class="form-group">
          <label for="firstname">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter FirstName"
      
            ref={title}
            
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
            placeholder="Enter LastName"
            ref={image}
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
            ref={description}
            required
          />
        </div>
       
      
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        
      </form>
      </div>
    </div>
  );
}

export default Create;
