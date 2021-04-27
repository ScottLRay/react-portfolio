import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;