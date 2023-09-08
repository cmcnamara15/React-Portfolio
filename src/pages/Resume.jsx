import React from "react";
import resumeImageOne from "../assets/images/ResumeScreenShot1.png";
import resumeImageTwo from "../assets/images/ResumeScreenShot2.png";
// import resumePdf from "../assets/resume.pdf";

export default function Resume() {
    return (
<div>
    <h1>My Resume</h1>
    <img src={resumeImageOne} alt="Resume" style={{ width: '50%', height: 'auto' }} />
    <br></br>
    <img src={resumeImageTwo} alt="Resume" style={{ width: '50%', height: 'auto' }} />
    {/* <a href={resumePdf} download="resume.pdf">Download PDF</a> */}
</div>
    )
}