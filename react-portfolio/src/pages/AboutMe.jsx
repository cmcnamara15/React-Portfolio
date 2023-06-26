import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function MediaCard() {
    return (
        <div>
        <CardMedia
        component="img"
        style={{height: 'auto', width: '50%', margin:'0 auto'}}
        image="https://i.ibb.co/BydCjGM/Screenshot-2023-06-26-at-3-33-31-PM.png"
        alt="About Me"
        />
            <h1>About Me</h1>
            <p>
                I am a full stack web developer with a background in the trades.
                I have a passion for learning and problem solving. I am a team player 
                and I am always looking for ways to improve myself and the team.
                I am currently enrolled in the University of Teaxs at Austin's full stack web development bootcamp.
                I am looking forward to applying my skills to a new career in web development.
                These skills include HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySql, MongoDB, and more.
            </p>
        </div>
    )
}