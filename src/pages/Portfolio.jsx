import React from "react";
import Project from "../components/Project";
import dudeImage from '../assets/images/dude-wheres-my-show.png';
import fusionImage from '../assets/images/fusion-fables.png';
import writeChoiceImage from '../assets/images/writeChoice.png';
import weatherImage from '../assets/images/weatherDashboard.png';
import codeQuizImage from '../assets/images/codeQuiz.png';
import techBlogImage from '../assets/images/techBlog.png';

export default function Portfolio() {
    const projects = [
        {
            name: "Dude where's my show?",
            description: "A web app that allows users to search for their favorite TV shows and find out where they can stream them.",
            image: dudeImage,
            github: "https://eeast.github.io/Dude-Wheres-My-Show/"
        },
        {
            name: "Fusion Fables",
            description: "Creative writing app that allows users to create stories and post them to a public feed, the end of each story is left open for other users to continue.",
            image: fusionImage,
            github: "https://github.com/HunterHester/fusion-fables",
            deployed: "https://fusion-fables.herokuapp.com/"
        },
        {
            name: "WriteChoice",
            description: "Browser-based text editor that allows users to create, edit, and save documents.",
            image: writeChoiceImage,
            github: "https://github.com/cmcnamara15/WriteChoice",
            deployed: "https://writechoice.herokuapp.com/"
        },
        {
            name: "Weather Dashboard",
            description: "Browser-based text editor that allows users to create, edit, and save documents.",
            image: weatherImage,
            github: "https://cmcnamara15.github.io/Weather_Dashboard/",
            deployed: "https://writechoice.herokuapp.com/"
        },
        {
            name: "Coding Quiz",
            description: "Browser-based text editor that allows users to create, edit, and save documents.",
            image: codeQuizImage,
            github: "https://github.com/cmcnamara15/Coding_Quiz",
            deployed: "https://cmcnamara15.github.io/Coding_Quiz/",
        },
        {
            name: "Tech-Blog",
            description: "Browser-based text editor that allows users to create, edit, and save documents.",
            image: techBlogImage,
            github: "https://github.com/cmcnamara15/Tech-Blog",
        },
    ]
    return (
        <div>
            <h1>Portfolio</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                {projects.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}