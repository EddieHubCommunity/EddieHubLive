import React from "react";
import FormatTime from "./convert-time";

function EventCard({ data }) {
  return (
    <div className="w-full p-4 flex text-white flex-col bg-primary">
      <div className="flex justify-end">{FormatTime(data.updatedAt)}</div>
      <div className="font-semibold flex justify-between">
        <div className="rounded-full">
          <a rel="noreferrer" target="_blank" href={data.githubUserURL}>
            {data.githubUsername._id}
          </a>
        </div>
        <div>{data.githubUsername.location.provided}</div>
      </div>
      <div className="flex justify-between">
        <div>{data.event}</div>
        <div>
          <a rel="noreferrer" target="_blank" href={data.repoURL}>
            {data.repoName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
