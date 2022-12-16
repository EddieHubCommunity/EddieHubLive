import React from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import Version from "./version";
import PanToMarker from "./zoom-to-marker";
import PropTypes from "prop-types";

function Map({ events }) {
  return (
    <MapContainer
      style={{ height: "100vh", zIndex: 10 }}
      center={[51.505, -0.09]}
      zoom={3}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MarkerClusterGroup chunkedLoading> */}
      {events.map((event) => (
        <>
          <Marker
            icon={L.icon({
              className: "rounded-full",
              iconUrl: `https://www.github.com/${event.githubUsername._id}.png`,
              popupAnchor: [0, -10],
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            })}
            key={event.id}
            position={[event.githubUsername.location.lat, event.githubUsername.location.long]}
          >
            <Popup>
              {event.githubUsername._id}: {event.event}
            </Popup>
          </Marker>
          <PanToMarker
            position={[event.githubUsername.location.lat, event.githubUsername.location.long]}
          />
        </>
      ))}
      {/* </MarkerClusterGroup> */}
      <Version />
    </MapContainer>
  );
}

Map.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ),
};

export default Map;
