import React from "react";
import resume from "../../assets/assets/resume/mbali-hope-luthi.pdf";


const Resume = () => (
    <section className="container" id="resume">

      <button className="btn btn-lg">
            <a href={resume} download="MbaliResume"><i class="bi bi-download"></i>  Download Resume</a>
      </button>
        <div className="row" style={{padding: 60}}>
    
        </div>

    </section>
)

export default Resume;