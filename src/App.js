import logo from "./logo.svg";
import "./App.css";
import Productdetails from "./Details";
import React from "react";
import Create from "./Create";
import Edit from "./Edit";
import { Routes, Route, Link, Outlet, useNavigate, unstable_HistoryRouter } from "react-router-dom";

import { useState, useEffect } from "react";

var allData = {
  data: [
    {
      title: "Aenvi",
      image:
        "https://www.newshub.co.nz/home/lifestyle/2019/11/dog-years-are-a-myth-2-year-old-dogs-already-middle-aged-scientists/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1574572358818/GETTY-labrador-puppy-1120.jpg.bing.com/images/search?view=detailV2&ccid=0Lz0eLk%2f&id=16A89E7AF2F40F97A695B8C0F03436B0CE763A40&thid=OIP.0Lz0eLk_V5RZZI2q7-5TIwHaLL&mediaurl=https%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1465%2f0432%2fproducts%2f3_5cc83266-a3cc-4c07-bfa4-602fe05b0cc8_1024x1024.jpg%3fv%3d1472715330&exph=861&expw=570&q=dog+image+link&simid=608014369917468209&FORM=IRPRST&ck=969DD1B3EFA9B8CBC1073D68052B25EA&selectedIndex=47&ajaxhist=0&ajaxserp=0",
      description: "Dog named Aenvi",
    },
  ],
};

function App() {
  var navigate = useNavigate();
  var [collection, setCollections] = useState(() => {
    if (localStorage.getItem("cards3") === null) {
        localStorage.setItem("cards3", JSON.stringify(allData));
      return allData.data;
    } else {
     
      return JSON.parse(localStorage.getItem("cards3")).data;
      
    }
  });

  var handleSelectCard = (e) => {
    localStorage.setItem("selectedCard",JSON.stringify( e));

    navigate("/Details");
  };
  var handleDelet = (e) => {
   
 
   var data = JSON.parse(localStorage.getItem("cards3")).data;
 
     data = data.filter((product)=> {return product["title"] !== e.title});
  
   setCollections(data)
     data = {data:data}
     localStorage.setItem("cards3",JSON.stringify(data));
    };

  var handleEdit = (e) => {
   
  localStorage.setItem("title",e.title)
  localStorage.setItem("image",e.image)
  localStorage.setItem("description",e.description)
     navigate("/Edit")
  };

  return (
    <div>
      <Link to="/Create">
        <button className="btn btn-primary" id="btn1">
          Create Data
        </button>
      </Link>

      <div id="cardd">
        {collection?.map((ele, index) => {
          return (
            <div
              key={index}
              className="card"
              id="cardbody"
              style={{ width: "19.5rem", display: "inline-grid" }}
            >
              <img
                className="card-img-top"
                style={{ height: "18rem" }}
                src={ele.image}
                alt="Card image cap"
              />

              <div className="card-body">
                <h5 className="card-title" style={{ height: "3rem" }}>
                  {ele.title}
                </h5>
                <p className="card-text" style={{ height: "5rem" }}>
                  {ele.description}
                </p>
              </div>
              <button
                className="btn btn-primary"
                id="btn1"
                onClick={() => handleSelectCard(ele.title)}
              >
                Product Details
              </button>
              <button
                style={{ align: "end" }}
                class="btn btn-primary"
                id="btn2"
                onClick={() => handleDelet(ele)}
              >
                Delete
              </button>
              <button
                style={{ align: "end" }}
                class="btn btn-primary"
                id="btn2"
                onClick={() => handleEdit(ele)}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
