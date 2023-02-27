import React from "react";
import { useState } from "react";
import env from "dotenv";
import ReactMapGL from "react-map-gl";
const StoreMap = () => {
 env.config()
  const [viewport, setViewport] = useState({
    latitude: 40.3587563,
    longitude: 49.8362907,
    zoom: 10,
    height: "100vh",
    width: "100vw",
  });
  return (
    <div>
      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.MAP_BOX_TOKEN}>
        marker
      </ReactMapGL>
    </div>
  );
};

export default StoreMap;
