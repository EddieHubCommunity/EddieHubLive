import packageJson from '../package.alias.json';
export default function Version() {
  return (
    <div className="leaflet-controlcontainer">
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control-attribution">
          <span>v{packageJson.version}</span>
        </div>
      </div>
    </div>
  );
}
