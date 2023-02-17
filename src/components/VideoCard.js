import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="mx-2 mb-10 w-72  p-2">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg"
      ></img>
      <div className="font-semibold mt-3 text-sm overflow-ellipsis overflow-hidden h-min">
        {title}
      </div>
      <div className="text-xs mt-1 text-gray-700">{channelTitle}</div>
      <div className="text-xs mt-1 text-gray-700">{viewCount + " views"}</div>
    </div>
  );
};

export default VideoCard;
