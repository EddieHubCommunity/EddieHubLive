import { useMap } from "react-leaflet"

export default function PanToMarker() {
    const map = useMap()
    map.panTo([50, 30]);
    return null
  }
  