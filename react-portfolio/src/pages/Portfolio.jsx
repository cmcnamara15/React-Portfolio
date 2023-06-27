import React from "react";
import Project from "../components/Project";
import dudeImage from '../assets/images/dude-wheres-my-show.png';

export default function Portfolio() {
    const projects = [
        {
            name: "Dude where's my show?",
            description: "A web app that allows users to search for their favorite TV shows and find out where they can stream them.",
            image: dudeImage,
            github: "https://eeast.github.io/Dude-Wheres-My-Show/"
        }
    ]
    return (
        <div>
            <h1>Portfolio</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-between' }}>
                {projects.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}