import { useEffect, useState } from "react";

export default function usePaginatedImages(photos, pageNumber) {
  const photoData = photos;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  function paginateImages(pageNumber) {
    const itemsPerPage = 9;
    let paginatedDataObject = {};

    const determineNumberOfPages = () => {
      let index = 0;
      let dataLength = photoData.length;
      let chunkArray = [];

      for (index = 0; index < dataLength; index += itemsPerPage) {
        let newChunk = photoData.slice(index, index + itemsPerPage);
        chunkArray.push(newChunk);
      }

      chunkArray.forEach((chunk, i) => {
        paginatedDataObject[i + 1] = chunk;
      });
    };

    determineNumberOfPages();

    return paginatedDataObject[pageNumber];
  }

  useEffect(() => {
    setLoading(true);
    setError(false);
    setImages((prevImages) => {
      return [...new Set([...prevImages, paginateImages(pageNumber)])];
    });
    setHasMore(images.flat().length !== photoData.length);
    setLoading(false);
  }, [pageNumber]);

  return { loading, error, images, hasMore };
}
