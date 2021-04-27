import React from "react";
import { Component } from "react";
import Container from "../components/Container/index"
import Card from "../components/Projects/index"
import projects from "../components/project.json"

class Work extends Component {
  state = {
    projects
  }

  render(){
    return (
        <Container>
          {this.state.projects.map(projects =>(
            <Card 
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            />
          ))}
      </Container>
    );
  }
}

export default Work