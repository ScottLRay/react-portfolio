import React from "react";
import ResumeMan from "../assest/images/man-resume-document.png"
import Container from "../components/Container/index"

function Resume() {
  return (<Container>
        <div className="card">
          <header>Resume</header>
          <a href="https://drive.google.com/file/d/17t-qFaOgAtLic_iNeH7SWMJi_Npjlt-7/view?usp=sharing">  
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