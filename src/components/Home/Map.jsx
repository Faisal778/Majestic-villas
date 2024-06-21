import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure you import the Leaflet CSS

const position = [51.505, -0.09];
const Map = () => {
  return (
    <>
    <div>
    <h1 className="text-2xl text-center font-semibol capitalize lg:text-3xl text-gray-800 p-4 bg-blue-100 rounded-2xl">Find us on Map</h1>
    </div>
    <div className="mt-10" style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </>
  );
};

export default Map;
