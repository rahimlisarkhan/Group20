import React from "react";
import Map, { TileLayer, Marker, Popup } from "react-leaflet";

type Props = {
  lon: number;
  lat: number;
};

export const ReactMap: React.FC<Props> = ({ lon, lat }) => {
  const position = [lat, lon];

  return (
    <Map center={position} zoom={13} style={{ width: "100%", height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Coordinates: {lat}, {lon}
        </Popup>
      </Marker>
    </Map>
  );
};
