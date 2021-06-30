import React, { useState, useEffect } from "react";
import TopLogo from "./TopLogo";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
import getImages from "./getImages";

export default function Photography({ photos, setPhotos }) {
  const [pageNumber, setPageNumber] = useState(1);
  const { images, loading, hasMore, error } = getImages(photos, pageNumber);
  const [imageList, setImageList] = useState(images);
  useEffect(() => {
    setImageList(images);
  }, [images]);
  return (
    <div className="images">
      {imageList.map((image, i) => {
        return <img key={i} src={image.url} alt={image.description} />;
      })}
    </div>
  );
}
