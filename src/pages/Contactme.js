import React from "react";
import Github from "../assest/images/github-logo.png";
import Linkedin from "../assest/images/256px-Linkedin_icon.png";
import Gmail from "../assest/images/Gmail-logo.jpg"
import Container from "../components/Container/index";
import Wrapper from "../components/Wrapper";

function About() {
  return (
    <Container>
      <Wrapper>
        <div className="row row-sm-2 row-md-4">
          <div className="col-6 col-sm-4">
            <div className="contactCard">
              <header>Github</header>
              <a href="https://github.com/ScottLRay">
                <img src={Github} alt="icon of GitHub" />
              </a>
              <p>https://github.com/ScottLRay</p>
            </div>
          </div>
        </div>
        <div className="row row-sm-2 row-md-4">
          <div className="col-6 col-sm-4">
            <div className="contactCard">
              <header>Linkedin</header>
              <a href="https://www.linkedin.com/in/scott-ray-6b01801b6/">
                <img src={Linkedin} alt="icon of linkedin" />
              </a>
              <p>https://www.linkedin.com/in/scott-ray-6b01801b6/</p>
            </div>
          </div>
        </div>
        <div className="row row-sm-2 row-md-4">
          <div className="col-6 col-sm-4">
            <div className="contactCard">
              <header>Gmail</header>
              <a href="mailto:scottlray90@gmail.com">
                <img src={Gmail} alt="icon of google mail"  />
              </a>
              <p>Scottlray90@gmail.com</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default About;
