import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <img id="profile" alt="profile" src="https://i.imgur.com/Yrtmhag.jpg" className="img-fluid" width="200px" height="200px"></img>
      <h1>Allan J. Binayao</h1>
    </div>
  );
}

export default Jumbotron;
