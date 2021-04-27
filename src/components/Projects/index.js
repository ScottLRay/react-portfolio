import React from "react";
import "./Card.css"

function ProjectCard(props) {
  return (
    <>
      <div className="row row-1 row-sm-2 row-md-4 justify-content-center">
        <div className="col-6 col-sm-4">
          <div className="card">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
              <a className="btn btn-primary" href={props.repo} role="button">Repo</a>
              </p>
              <a className="btn btn-primary" href={props.deployed} role="button">Deployed</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
