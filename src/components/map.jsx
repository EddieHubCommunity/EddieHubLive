import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import MarkerCluster from "./marker-cluster";
import "leaflet/dist/leaflet.css";
import Version from "./version";
import PanToMarker from "./zoom-to-marker";
import PropTypes from "prop-types";

function Map({ events }) {
  return (
    <MapContainer
      style={{ height: "100%", zIndex: 10 }}
      center={[51.505, -0.09]}
      zoom={3}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerCluster>
      {events.filter(event => event.githubUsername.location).map((event) => (
        <div key={event._id}>
          <Marker
            icon={L.icon({
              className: "rounded-full",
              iconUrl: `https://www.github.com/${event.githubUsername._id}.png`,
              popupAnchor: [0, -10],
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            })}
            position={[event.githubUsername.location.lat, event.githubUsername.location.long]}
          >
            <Popup>
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-[600]">{event.githubUsername._id}</h1>
                <span>Location - {event.githubUsername.location.provided}</span>
                <span>Repo - {event.repoName}</span>
                <span>Event Peformed - {event.event}</span>
                <span>Issue comments - {event.githubUsername.events.issueComment}</span>
              </div>
            </Popup>
          </Marker>
          <PanToMarker
            position={[event.githubUsername.location.lat, event.githubUsername.location.long]}
          />
        </div>
      ))}
       </MarkerCluster>
      <Version />
    </MapContainer>
  );
}

Map.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      githubUsername: PropTypes.shape ({
        _id: PropTypes.string,
        location: PropTypes.shape ({
          provided: PropTypes.string,
          lat: PropTypes.number,
          long: PropTypes.number,
        }),
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        events: PropTypes.shape({
          workflowDispatch: PropTypes.number,
        }),
      }),
      event: PropTypes.string,
      _id: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      __v: PropTypes.number,
    }),
  ),
};

export default Map;
