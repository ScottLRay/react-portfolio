import React from "react";
import "./Card.css"

function ProjectCard(props) {
  return (
    <>
      <div className="row row-sm-2 row-md-4">
        <div className="col-6 col-sm-4">
          <div className="card">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <a className="btn btn-primary" href={props.repo} role="button">Repo</a>
              <a className="btn btn-primary" href={props.deployed} role="button">Deployed</a>
              <p>Technical Skills Used: {props.skills}</p>
              <p>Description: {props.details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
