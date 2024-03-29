import React from "react"
export default function Version() {
  const version = import.meta.env.VITE_REACT_APP_VERSION;
  return (
    <div className="leaflet-controlcontainer">
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control-attribution">
          <span>v{version}</span>
        </div>
      </div>
    </div>
  );
}
