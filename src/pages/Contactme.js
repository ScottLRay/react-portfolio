import React from "react";
import Github from "../components/assest/images/github-logo.png";
import Linkedin from "../components/assest/images/linkenin-icon.png";
import Container from "../components/Container/index";

function About() {
  return (
    <Container>
      <h2>Contact Me</h2>
      <nav>
        <section className="card" style={{ width: '20rem' }}>
          <header>Github</header>
          <a href="https://github.com/ScottLRay">
            <img src={Github} alt="picture of an icon of GitHub" />
          </a>
        </section>
        <section className="card" style={{ width: '20rem' }}>
          <header>Linkedin</header>
          <a href="https://www.linkedin.com/in/scott-ray-6b01801b6/">
            <img src={Linkedin} alt="picture of an icon of linkedin" />
          </a>
        </section>
      </nav>
    </Container>
  );
}

export default About;
