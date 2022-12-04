import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import Version from "./version";

function Map({ events }) {
  console.log(events)
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={[51.505, -0.09]}
      zoom={3}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
      >
      {events.map(event => (
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
            position={[
              event.githubUsername.location.lat,
              event.githubUsername.location.long,
            ]}
          >
            <Popup>
              {event.githubUsername._id}: {event.event}
            </Popup>
          </Marker>
        </>
      ))}
      </MarkerClusterGroup>
      <Version />
    </MapContainer>
  );
}

export default Map;
