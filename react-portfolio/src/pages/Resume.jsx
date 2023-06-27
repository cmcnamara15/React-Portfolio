import React from "react";
import resumeImageOne from "../assets/images/resumeOne.png";
// import resumeImageTwo from "../assets/images/resumeTwo.png";
// import resumePdf from "../assets/resume.pdf";

export default function Resume() {
    return (
<div>
    <h1>My Resume</h1>
    <img src={resumeImageOne} alt="Resume" style={{ width: '75%', height: 'auto' }} />
    {/* <a href={resumePdf} download="resume.pdf">Download PDF</a> */}
</div>
    )
}