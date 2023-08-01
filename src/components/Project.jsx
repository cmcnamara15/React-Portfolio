import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// export default function project({ project }) {
//     return (
//         <Card style={{ margin: '2em', width: '350px' }}>
//             <CardActionArea href={project.github} target="_blank" rel="noopener">
//                 <CardMedia
//                     component="img"
//                     height="225"
//                     image={project.image}
//                     alt={project.name}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {project.name}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     )
// } 
export default function project({ project }) {
    return (
        <Card style={{ margin: '2em', width: '350px' }}>
            <CardActionArea target="_blank" rel="noopener" >
                <div className="color-img" style={{ 
                    backgroundImage: `url(${project.image})`, 
                    height: "225px", 
                    backgroundSize: 'cover',
                }}>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                    {/* <Typography gutterBottom variant="h6" component="div">
                        Technologies
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize="15px">
                        {project.technologies}
                    </Typography> */}
                    <Button variant="outlined" style={{ marginRight: '1em', marginTop: '1em' }} href={project.github} target="_blank" rel="noopener">
                        Github
                    </Button>
                    <Button variant="outlined" style={{ marginTop: '1em' }} href={project.deployed} target="_blank" rel="noopener">
                        Live Site
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}