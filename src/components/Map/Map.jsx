import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "lucide-react";
import { Button, Card } from "@mui/material";
import Cards from "./Cards";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const [click, setclick] = useState(false);
  const inicialvalor = [-22.3154, -49.0615];
  const [posição, setposição] = useState(inicialvalor);
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(posição, 13);
    }
  }, [posição]);
  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div className="flex items-center justify-center flex-col-reverse mt-10 gap-4">
      <div className="flex overflow-y-scroll w-150 h-80 items-center justify-center">
        <div className="flex flex-col mt-120 ">
          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="1"
            nome="Parque Viaduto"
            cord={[-22.3506595, -49.1094516]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="2"
            nome="Bernardino de Campos"
            cord={[-22.3328344, -49.0923171]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="3"
            nome="Eng. Octávio Rasi"
            cord={[-22.3029633, -49.0072948]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="4"
            nome="Santa Edwirges"
            cord={[-22.3110926, -49.0953966]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="5"
            nome="Jd. Europa / Pq. das Nações"
            cord={[-22.3475701, -49.0625656]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="6"
            nome="Pousada I"
            cord={[-22.2754149, -49.0742216]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="7"
            nome="Antônio Eufrásio de Toledo"
            cord={[-22.3367846, -49.080647]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="8"
            nome="Mary Dota"
            cord={[-22.2931764, -49.054015]}
            posição={posição}
            setposição={setposição}
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="9"
            nome="Edson Francisco da Silva"
            cord={[-22.3136927, -49.1214692]}
            posição={posição}
            setposição={setposição}
          />
        </div>
      </div>
      <div className="bg-amber-500 ">
        <MapContainer
          center={posição}
          zoom={13}
          ref={mapRef}
          dragging={false}
          style={{ height: "50vh", width: "90vw" }}
        >
          <Marker position={posição} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default SimpleMap;
