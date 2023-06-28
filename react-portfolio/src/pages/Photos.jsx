import react from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import horse from "../assets/photography/horse.JPG";
import galicia from "../assets/photography/galicia.JPG";
import grandmaFlower from "../assets/photography/grandmaFlower.JPG";
import et from "../assets/photography/etPondering.JPG";
import moon from "../assets/photography/moon.JPG";
import sunset from "../assets/photography/sunsetSeagull.JPG";
import vanGough from "../assets/photography/vanGoughTree.JPG";
import cross from "../assets/photography/cross.JPG";
import stump from "../assets/photography/stumps.JPG";
import rearView from "../assets/photography/rearView.JPG";
import lights from "../assets/photography/lights.JPG";
import end from "../assets/photography/endOfworld.JPG"
import donkey from "../assets/photography/donkeyTime.JPG"

const itemData = [
    {
        img: horse,
        title: 'Image 1',
        cols: 1,
        rows: 1,
    },
    {
        img: galicia,
        title: 'Image 2',
        cols: 2,
        rows: 1,
    },
    {
        img: grandmaFlower,
        title: 'Image 3',
        cols: 1,
        rows: 2,
    },
    {
        img: et,
        title: 'Image 4',
        cols: 1,
        rows: 1,
    },
    {
        img: moon,
        title: 'Image 5',
        cols: 1,
        rows: 1,
    },
    {
        img: sunset,
        title: 'Image 6',
        cols: 2,
        rows: 1,
    },
    {
        img: vanGough,
        title: 'Image 7',
        cols: 1,
        rows: 2,
    },
    {
        img: cross,
        title: 'Image 8',
        cols: 1,
        rows: 1,
    },
    {
        img: lights,
        title: 'Image 9',
        cols: 1,
        rows: 1,
    },
    {
        img: rearView,
        title: 'Image 10',
        cols: 2,
        rows: 1,
    },
    {
        img: stump,
        title: 'Image 11',
        cols: 1,
        rows: 2,
    },
    {
        img: end,
        title: 'Image 12',
        cols: 1,
        rows: 1,
    },
    {
        img: donkey,
        title: 'Image 13',
        cols: 2,
        rows: 1,
    },
]

export default function Photos() {
    return (
        <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
