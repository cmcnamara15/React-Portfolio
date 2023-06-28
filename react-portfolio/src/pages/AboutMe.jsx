import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';


export default function MediaCard() {
    return (
        <div>
            <div className="image-container">
                <CardMedia
                    component="img"
                    className="color-img"
                    style={{height: 'auto', width: '50%', margin:'0 auto'}}
                    image="https://i.ibb.co/BydCjGM/Screenshot-2023-06-26-at-3-33-31-PM.png"
                    alt="About Me"
                />
            </div>
        <div style={{width: '70%', margin: '0 auto'}}>
            <h1>About Me</h1>
            <p>
                {/* I am a full stack web developer with a background in the trades.
                I have a passion for learning and problem solving. I am a team player 
                and I am always looking for ways to improve myself and the team.
                I am currently enrolled in the University of Teaxs at Austin's full stack web development bootcamp.
                I am looking forward to applying my skills to a new career in web development.
                These skills include HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySql, MongoDB, and more. */}
                Driven full-stack JavaScript bootcamp student with a diverse background ranging from home builder to 
                program manager in a behavioral health organization. My work history, whether assisting with coordinating 
                operations at yacht clubs, maintaining a fast-paced bakery, or teaching meditation, has imbued me with a 
                unique blend of problem-solving, attention to detail, and interpersonal skills.</p>

                <p>Throughout my professional journey, I've learned the importance of clear communication, teamwork, adaptability, 
                and the ability to quickly learn new skills. Whether working with my hands or guiding individuals through personal challenges, 
                I've consistently applied these abilities to effectively navigate and excel in various environments.</p>

                <p>In my personal time, I enjoy playing music(often in a garage rock band of some capacity) and exploring new places. 
                I recently completed the Camino de Santiago, an experience that has further honed my drive to connect with new places and people.</p>

                <p>I'm always eager to connect with fellow tech enthusiasts, potential mentors, or anyone interested in a friendly conversation about 
                the ever-evolving world of technology. Don't hesitate to reach out!
                </p>
        </div>
        </div>
    )
}