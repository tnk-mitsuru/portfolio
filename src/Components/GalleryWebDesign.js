import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import art1 from '../images/webDesign_wireFrame.png';
import art2 from '../images/webDesign_titleLogo.png';
import art3 from '../images/webDesign_moodBoard.png';
import art4 from '../images/webDesign_colorScheme.png';

export default function GalleryWebDesign () {
    const photos = [
        {
          src: art1,
          width: 1,
          height: 1
        },
        {
          src: art2,
          width: 2.5,
          height: 1
        },
        {
          src: art3,
          width: 1.2,
          height: 1,
        },
        {
          src: art4,
          width: 2,
          height: 1,
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
        <h2 className="headingH2">各プロセスの主なアウトプット</h2>
        <p className="text"></p>
        <Gallery photos={photos} targetRowHeight={150} onClick={openLightbox} />
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
