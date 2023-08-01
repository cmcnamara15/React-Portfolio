import React from "react";
import Project from "../components/Project";
import dudeImage from '../assets/images/dude-wheres-my-show.png';
import fusionImage from '../assets/images/fusion-fables.png';
import writeChoiceImage from '../assets/images/writeChoice.png';
import weatherImage from '../assets/images/weatherDashboard.png';
import codeQuizImage from '../assets/images/codeQuiz.png';
import techBlogImage from '../assets/images/techBlog.png';
import schedaddy from '../assets/images/schedaddy.png';


export default function Portfolio() {
    const projects = [
        {
            name: "Dude where's my show?",
            description: "A web app that allows users to search for their favorite TV shows and find out where they can stream them.",
            image: dudeImage,
            github: "https://eeast.github.io/Dude-Wheres-My-Show/",
            deployed: "https://eeast.github.io/Dude-Wheres-My-Show/",
            technologies: "Javascript, Materialize, HTML, CSS, Third Party API's",
        },
        {
            name: "Schedaddy",
            description: "Interactive MERN stack single-page CRM application.",
            image: schedaddy,
            github: "https://github.com/cmcnamara15/Schedaddy",
            deployed: "https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
            technologies: "React, GraphQL, JSON Web Tokens, MongoDB, Bootstrap",
        },
        {
            name: "Fusion Fables",
            description: "Creative writing app that allows users to create stories and post them to a public feed, the end of each story is left open for other users to continue.",
            image: fusionImage,
            github: "https://github.com/HunterHester/fusion-fables",
            deployed: "https://fusion-fables.herokuapp.com/",
            technologies: "Javascript, Sequelize, MYSQL, Handlebars, Express.js",
        },
        // {
        //     name: "WriteChoice",
        //     description: "Browser-based text editor that allows users to create, edit, and save documents.",
        //     image: writeChoiceImage,
        //     github: "https://github.com/cmcnamara15/WriteChoice",
        //     deployed: "https://writechoice.herokuapp.com/"
        // },
        {
            name: "Weather Dashboard",
            description: "Utilized third party API's to develop a interactive weather forecast site.",
            image: weatherImage,
            github: "https://github.com/cmcnamara15/Weather_Dashboard",
            deployed: "https://cmcnamara15.github.io/Weather_Dashboard/",
            technologies: "HTML, CSS, Javascript, jQuery, Open Weather API"
        },
        {
            name: "Coding Quiz",
            description: "Vanilla javascript and jQuery to build a multiple choice quiz challenge game",
            image: codeQuizImage,
            github: "https://github.com/cmcnamara15/Coding_Quiz",
            deployed: "https://cmcnamara15.github.io/Coding_Quiz/",
            technologies: "JavaScript, HTML, CSS"
        },
        {
            name: "Tech-Blog",
            description: "Browser-based text editor that allows users to create, edit, and save documents.",
            image: techBlogImage,
            github: "https://github.com/cmcnamara15/Tech-Blog",
            deployed: "https://chris-macs-techblog-290512fcf235.herokuapp.com/",
            technologies: "Javascript, Sequelize, MYSQL, Handlebars, Express.js",
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
            <h2> Technologies:</h2>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        listStyleType: 'none', 
                        padding: 0, 
                        columnGap: '1em',
                        rowGap: '1em',
                        marginTop: '1em'
                    }}>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>APIs</li>
                    </ul>
        </div>
    )
}