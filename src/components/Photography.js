import React, { useState, useEffect, useRef, useCallback } from "react";
import TopLogo from "./TopLogo";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import usePaginatedImages from "./usePaginatedImages";

export default function Photography({ photos, setPhotos }) {
  const [pageNumber, setPageNumber] = useState(1);
  const { images, loading, hasMore, error } = usePaginatedImages(
    photos,
    pageNumber
  );
  const [imageList, setImageList] = useState([]);
  const observer = useRef();
  const lastImageRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setImageList(images);
  }, [images]);

  return (
    <div>
      <TopLogo />
      <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {imageList.flat().length &&
            imageList.flat().map((image, index) => {
              if (!image) return;
              if (imageList.flat().length === index + 1) {
                console.log(image);
                return (
                  <img
                    ref={lastImageRef}
                    key={index}
                    src={image.url}
                    alt={image.description}
                  />
                );
              } else {
                return (
                  <img key={index} src={image.url} alt={image.description} />
                );
              }
            })}
        </Masonry>
      </ResponsiveMasonry>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}
