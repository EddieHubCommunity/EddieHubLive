import React from "react";

function EventCard({ data }) {
  return (
    <div className="w-full p-4 flex flex-col bg-orange-300">
      <div className="font-semibold flex justify-between">
        <div>{data.githubUsername._id}</div>
        <div>{data.githubUsername.location.provided}</div>
      </div>
      <div>{data.event}</div>
    </div>
  );
}

export default EventCard;
