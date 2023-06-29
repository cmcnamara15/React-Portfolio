import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This imports the lightbox CSS.
import photoData from './photoData';


export default function Photos() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '80vh',
            padding: '2em',
            overflow: 'auto'
            }}>
            <ImageList
                sx={{ maxWidth: '100%', height: 'auto' }}
                cols={4}
                rowHeight={200}
            >
                {photoData.map((item, index) => ( // Use photoData here instead of itemData
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
                    mainSrc={photoData[photoIndex].img}
                    nextSrc={photoData[(photoIndex + 1) % photoData.length].img}
                    prevSrc={photoData[(photoIndex + photoData.length - 1) % photoData.length].img}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + photoData.length - 1) % photoData.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % photoData.length)
                }
                />
            )}
        </div>
    );
}



    // Here we are returning the JSX to render for this component.
    // It contains an ImageList component which maps over the itemData array to generate an ImageListItem 
    // for each image. When an ImageListItem is clicked, it updates the photoIndex state and opens the lightbox.
    // If the lightbox is open (isOpen is true), a Lightbox component is rendered which displays the current image 
    // and provides buttons to navigate to the next and previous images.