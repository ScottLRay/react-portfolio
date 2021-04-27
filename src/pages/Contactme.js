import React from "react";
import Github from "../assest/images/github-logo.png";
import Linkedin from "../assest/images/linkenin-icon.png";
import Gmail from "../assest/images/Gmail-logo.jpg"
import Container from "../components/Container/index";
import Wrapper from "../components/Wrapper";

function About() {
  return (
    <Container>
      <Wrapper>
        <div className="row row-1 row-sm-2 row-md-4 justify-content-center">
          <div className="col-6 col-sm-4">
            <div className="card">
              <header>Github</header>
              <a href="https://github.com/ScottLRay">
                <img src={Github} alt="icon of GitHub" />
              </a>
            </div>
          </div>
        </div>
        <div className="row row-1 row-sm-2 row-md-4 justify-content-center">
          <div className="col-6 col-sm-4">
            <div className="card">
              <header>Linkedin</header>
              <a href="https://www.linkedin.com/in/scott-ray-6b01801b6/">
                <img src={Linkedin} alt="icon of linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="row row-1 row-sm-2 row-md-4 justify-content-center">
          <div className="col-6 col-sm-4">
            <div className="card">
              <header>Gmail</header>
              {/* <a href="https://www.linkedin.com/in/scott-ray-6b01801b6/"> */}
                <img src={Gmail} alt="icon of google mail" />
              {/* </a> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
// scottlray90@gmail.com
export default About;
