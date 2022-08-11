import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Details.css"

function Productdetails() {
  var [details, setDetails] = useState({
    title:"",
    image:"",
    description:""
  });
  var handleSelectedCard = (removeitem) => {
    console.log(typeof details,"before")
    //setDetails(details.filter((item) => item !== removeitem));
    console.log(details,"after")
   
  }


  useEffect(()=>{
    var selectedCard = localStorage.getItem("selectedCard");
    var allData = JSON.parse(localStorage.getItem("cards3")).data.filter((e)=>{
      if (e.title === selectedCard) {
        console.log(typeof e.title,"card1",selectedCard)
        return e;
      }
    })
    console.log(allData,"sss",selectedCard)
    setDetails(allData[0]);
  },[])

  return (
    <div >
    

      <div
        class="card"
        id="body"
        style={{ width: "19rem", alignItems: "center" }}
      >


        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="card-img-top"
                style={{ height: "18rem", width: "18rem" }}
                src={details.image}
                alt="First slide"
              />
            </div>
           
          </div>
         
         
          
        </div>

        <div class="card-body">
          <h5 class="card-title" style={{ height: "3rem" }}>
            {details.title}
          </h5>
          <p class="card-text" style={{ height: "5rem" }}>
            {details.description}
          </p>
          <button
            style={{ align: "end" }}
            class="btn btn-primary"
           
            id="btn1"
           
          >
            Edit
          </button>
          <button
            style={{ align: "end" }}
            class="btn btn-primary"
           
            id="btn2" onClick={()=>handleSelectedCard(details.title)}
           
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
