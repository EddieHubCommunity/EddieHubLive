import React from "react";
import FormatTime from "./convert-time";
import PropTypes from "prop-types";

function EventCard({ data }) {
  return (
    <div className="flex w-full flex-col rounded-lg border-l-8  border-primary bg-white p-4 shadow-lg">
      <div className="flex justify-end">{FormatTime(data.updatedAt)}</div>
      <div className="flex justify-between font-semibold">
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

EventCard.propTypes = {
  data: {
    githubUsername: {
      _id: PropTypes.string,
      location: {
        provided: PropTypes.string,
        lat: PropTypes.number,
        long: PropTypes.number,
      },
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      events: {
        workflowDispatch: PropTypes.number,
      },
    },
    event: PropTypes.string,
    _id: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
  },
};

export default EventCard;
