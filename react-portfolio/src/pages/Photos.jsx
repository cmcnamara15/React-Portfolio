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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ImageList
                sx={{ maxWidth: '100%', height: 'auto' }}
                cols={3}
                rowHeight={164}
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



