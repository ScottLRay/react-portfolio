import React from "react";
import ResumeMan from "../assest/images/man-resume-document.png"
import Container from "../components/Container/index"

function Resume() {
  return (<Container>
    <h2>Resume</h2>
        <div className="card">
          <header>Word document of Resume</header>
          <a href="https://drive.google.com/file/d/1NbmU6QfW7C9HB6-J7fmK4Po0hTWvjXj_/view?usp=sharing">  
          <img
                src={ResumeMan}
                alt="icon of a my an a resume together"
            />
          </a>
          </div>
          </Container>
  );
}

export default Resume