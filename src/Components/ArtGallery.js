import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import art1 from '../images/conceptArt_research.jpg';
import art2 from '../images/conceptArt_relationship.jpg';
import art3 from '../images/conceptArt_city.jpg';
import art4 from '../images/fanArt_zenitsu.jpg';
import art5 from '../images/fanArt_earthsea.jpg';

import styles from '../styles/artGallery.module.css';

export default function Sns() {
    const photos = [
        {
          src: art1,
          width: 1.8,
          height: 1
        },
        {
          src: art2,
          width: 1.8,
          height: 1
        },
        {
          src: art3,
          width: 1.8,
          height: 1
        },
        {
          src: art4,
          width: 1,
          height: 1.8
        },
        {
          src: art5,
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
