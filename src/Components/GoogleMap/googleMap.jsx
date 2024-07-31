import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "80%",
  height: "500px",
};

const center = {
  lat: 49.232946365,
  lng: 28.471839421,
};
const mark = {
  lat: 49.232983365,
  lng: 28.471839401,
};

const MyGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-TTRSKwSpb0nmU7c5FDj_ziLRlQezmBc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(15);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={mark} label="KFC" title="dwadawdawwA" />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MyGoogleMap;
