import { useMap } from "react-leaflet"

export default function PanToMarker(position) {
    const map = useMap()
    const currentLocation = map.getCenter()
    const location = position.position ? position.position : [51.505, -0.09]
    
        map.flyTo( location,10 );
        setTimeout(() => {
            map.flyTo( [51.505, -0.09],3 )
          }, "8000") 
    
    return null
  }
  