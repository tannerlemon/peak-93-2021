import React from "react";
import TopLogo from "./TopLogo";
import Vimeo from "@u-wave/react-vimeo";

export default function Projects({
  videos,
  setVideos,
  filteredVideos,
  setFilteredVideos,
}) {
  const typesArray = [];
  videos.map((video) => {
    video.type.map((type) => {
      typesArray.push(type);
      return <div></div>;
    });
    return <div></div>;
  });
  const uniqueTypes = Array.from(new Set(typesArray));

  function filterVideos(type) {
    const filterHandler = [];
    videos
      .filter((video) => video.type.includes(type))
      .map((filteredVideo) => {
        console.log(filteredVideo);
        filterHandler.push(filteredVideo);

        return <div></div>;
      });
    setFilteredVideos(filterHandler);
  }

  return (
    <div>
      <TopLogo />
      <div className="filter">
        <h3 className="filterHeading">Filter</h3>
        <button className="type" onClick={() => setFilteredVideos(videos)}>
          view all
        </button>
        {uniqueTypes.map((type) => {
          return (
            <button onClick={() => filterVideos(type)} className="type">
              {type}
            </button>
          );
        })}
      </div>
      <div className="projectVideos">
        {filteredVideos
          .sort(function (video1, video2) {
            return video1.order - video2.order;
          })
          .map((video) => {
            return (
              <div className="videoHolder">
                <Vimeo
                  className="projectVideo"
                  video={video.url}
                  loop
                  responsive
                  controls
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
