import React from "react";
import ResumeMan from "../assest/images/man-resume-document.png"
import Container from "../components/Container/index"

function Resume() {
  return (<Container>
        <div className="card">
          <header>Resume</header>
          <a href="https://drive.google.com/file/d/1r7Fb0xU9bHeXIsUar9M4qu5Myd8fGRnU/view?usp=sharing">  
          <img
                src={ResumeMan}
                alt="icon of a man a resume together"
            />
          </a>
          </div>
          </Container>
  );
}

export default Resume