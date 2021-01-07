import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import relationship from '../images/conceptArt_relationship.jpg';
import city from '../images/conceptArt_city.jpg';
import letsAdventure from '../images/conceptArt_letsAdventure.jpg';
import zenitsu from '../images/fanArt_zenitsu.jpg';
import earthsea from '../images/fanArt_earthsea.jpg';

import styles from '../styles/artGallery.module.css';

export default function Sns() {
    const photos = [
        {
          src: relationship,
          width: 1.8,
          height: 1
        },
        {
          src: letsAdventure,
          width: 1,
          height: 1.8
        },
        {
          src: city,
          width: 1.8,
          height: 1
        },
        {
          src: zenitsu,
          width: 1,
          height: 1.8
        },
        {
          src: earthsea,
          width: 1.8,
          height: 1
        }
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.artGallery}`}>
        <h2 className="headingH2">作品集</h2>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}
