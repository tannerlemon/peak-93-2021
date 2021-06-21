import React from "react";
import TopLogo from "./TopLogo";

export default function Photography({ photos, setPhotos }) {
  return (
    <div>
      <TopLogo />
      <div className="photoHolder">
        {photos.map((photo) => {
          return (
            <div className="photo">
              <img alt={photo.description} src={photo.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
