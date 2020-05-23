import React from "react";
import "./index.css";

function Card(props, { children }) {
  return (
    <div className="card">
     <a href={props.href}><img src={props.img} className="card-img-top" alt="..."/></a>
     <div className="card-body">
       <div className="card-title">
         <p className="h4">
           {props.title}
           </p>
         </div>
         <div className="card-text">
           <p>
             {props.text}
             </p>
         </div>
    </div> 
    </div>
  );
}

export default Card;
