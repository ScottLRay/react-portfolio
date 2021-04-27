import React from "react";
import { Component } from "react";
import Container from "../components/Container/index"
import Card from "../components/Projects/index"
import projects from "../components/project.json"
import Wrapper from "../components/Wrapper"

class Work extends Component {
  state = {
    projects
  }

  render(){
    return (
        <Container>
          <Wrapper>
          {this.state.projects.map(projects =>(
            <Card 
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            repo={projects.repo}
            deployed={projects.deployed}
            />
          ))}
          </Wrapper>
      </Container>
    );
  }
}

export default Work