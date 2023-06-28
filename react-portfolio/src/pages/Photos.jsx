import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This imports the lightbox CSS.
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
import van from "../assets/photography/van.JPG"

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
        img: van,
        title: 'Image 14',
        cols: 2,
        rows: 1,
    },
]


export default function Photos() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ImageList
                sx={{ maxWidth: '100%', height: 'auto' }}
                cols={3}
                rowHeight={190}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={item.img} onClick={() => {setPhotoIndex(index); setIsOpen(true)}}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {isOpen && (
                <Lightbox
                    mainSrc={itemData[photoIndex].img}
                    nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
                    prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % itemData.length)
                }
                />
            )}
        </div>
    );
}



