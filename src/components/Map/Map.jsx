import React, { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "lucide-react";
import { Button, Card } from "@mui/material";
import Cards from "./Cards";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const inicialvalor = [-22.3154, -49.0615];
  const [posição, setposição] = useState(inicialvalor);
  const [click, setclick] = useState(false);

  function ecoponto(lat, long) {
    var set = [lat, long];
    setposição(set);
    mapRef.current.flyTo(posição, 12);
  }

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div className="flex items-center justify-center mt-10">
      <div>
        <Cards
          setclick={setclick}
          click={click}
          id="1"
          nome="macaco 1"
          ecoponto={ecoponto(22.3154, 49.0615)}
        />
        <Cards setclick={setclick} click={click} id="2" nome="macaco 2" />
      </div>
      <div>
        <MapContainer
          center={posição}
          zoom={13}
          ref={mapRef}
          style={{ height: "50vh", width: "50vw" }}
        >
          <Marker position={posição} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default SimpleMap;
