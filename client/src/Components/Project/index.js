import React from "react"
import "./style.css"
function Project(props) {
    return (
        <div class="card mb-3 w-75 project">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={props.img} class="card-img" alt={props.title} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <a href={props.deploy} className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">Check It Out</a>
                        <a href={props.repo} className="btn btn-secondary m-1" target="_blank" rel="noopener noreferrer">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project