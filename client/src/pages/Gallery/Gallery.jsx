import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { photos } from "./Gallery";
import { Lightbox } from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
const Gallery = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center m-5">Gallery</h2>
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />
        <div className="lightbox">
          <Lightbox
            index={index}
            slides={photos}
            open={index > 0}
            close={() => {
              setIndex(-1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
