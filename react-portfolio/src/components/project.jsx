import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';


export default function project({ project }) {
    return (
        <Card style ={{ width: '45%', margin: '3%' }}>
            <CardActionArea href={project.github} target="_blank" rel="noopener">
                <CardMedia
                    component="img"
                    height="225"
                    image={project.image}
                    alt={project.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
} 