import { useMap } from "react-leaflet"

export default function PanToMarker(position) {
    const map = useMap();
    const currentLocation = map.getCenter();
    const newLocation = position.position ? position.position : currentLocation;

        map.flyTo( newLocation,10 );
        setTimeout(() => {
            map.flyTo( currentLocation ,3 );
          }, "8000");
    
    return null;
  }