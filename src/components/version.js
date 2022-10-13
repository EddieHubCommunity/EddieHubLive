
export default function Version() {
  const version = process.env.REACT_APP_VERSION
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
