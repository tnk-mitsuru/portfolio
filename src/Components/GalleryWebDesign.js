import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import Carousel, { Modal, ModalGateway } from "react-responsive-carousel";

import art1 from '../images/webDesign_wireFrame.png';
import art2 from '../images/webDesign_moodBoard.png';

export default function GalleryWebDesign () {
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
      <div className="mainBlockMargin">
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
