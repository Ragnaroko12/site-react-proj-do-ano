import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "lucide-react";
import { Button, Card } from "@mui/material";
import Cards from "./Cards";
import iconeCustom from "/icon.png"; // Coloque na pasta certa
import L from "leaflet";

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

  const greenicon = new L.Icon({
    iconUrl: iconeCustom,
    iconSize: [30, 40], // Tamanho do ícone
    iconAnchor: [20, 40], // Ponto que toca o mapa
    popupAnchor: [0, -40], // Onde abre o popup
  });
  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div className="flex items-center justify-center flex-col-reverse overflow-x-hidden mt-10 gap-4">
      <div className="flex overflow-y-scroll w-100 h-80 items-center justify-center">
        <div className="flex flex-col mt-80 ">
          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="1"
            nome="Parque Viaduto"
            cord={[-22.339594972811817, -49.1081667608544]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://www.google.com/maps/place/Ecoponto+Parque+Viaduto/@-22.339719,-49.1107953,17z/data=!3m1!4b1!4m6!3m5!1s0x94bf67b8cb932cfd:0xd2c34d1aeaa3bffb!8m2!3d-22.339724!4d-49.1082204!16s%2Fg%2F11j8hxnwlt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="4"
            nome="Santa Edwirges"
            cord={[-22.31420399693511, -49.095546389690874]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://www.google.com/maps/place/Ecoponto+Santa+Edwirges/@-22.3143876,-49.0981642,17z/data=!4m14!1m7!3m6!1s0x94bf678f4c4e74c3:0x9fe08855474d3862!2sEcoponto+Santa+Edwirges!8m2!3d-22.3143926!4d-49.0955893!16s%2Fg%2F11fmybhmvk!3m5!1s0x94bf678f4c4e74c3:0x9fe08855474d3862!8m2!3d-22.3143926!4d-49.0955893!16s%2Fg%2F11fmybhmvk?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="5"
            nome="Jd. Europa / Pq. das Nações"
            cord={[-22.35120871034557, -49.06644403386653]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://www.google.com/maps/place/Ecoponto+Jardim+Europa+%2F+Parque+das+Na%C3%A7%C3%B5es/@-22.3514518,-49.0690082,17z/data=!3m1!4b1!4m6!3m5!1s0x94bf6714a629f02f:0x7ec3d42f2b127607!8m2!3d-22.3514568!4d-49.0664333!16s%2Fg%2F11sw3m09h5?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="6"
            nome="Pousada I"
            cord={[-22.27106575156291, -49.07149136920787]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://www.google.com/maps/place/EcoPonto+Pousada+I/@-22.2712991,-49.0762013,17z/data=!4m14!1m7!3m6!1s0x94bf6923ea8aece5:0x992400038abbbffb!2sEcoPonto+Pousada+I!8m2!3d-22.2713041!4d-49.0715879!16s%2Fg%2F11j8gcf_d6!3m5!1s0x94bf6923ea8aece5:0x992400038abbbffb!8m2!3d-22.2713041!4d-49.0715879!16s%2Fg%2F11j8gcf_d6?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="8"
            nome="Mary Dota"
            cord={[-22.2907553281481, -49.05298714339668]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://www.google.com/maps/place/Ecoponto+Mary+Dota/@-22.290964,-49.0604753,16.25z/data=!4m6!3m5!1s0x94bf67e36ce0a86b:0x227318c94a1abc00!8m2!3d-22.2910397!4d-49.0530259!16s%2Fg%2F11cn7f7jv9?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          />

          <Cards
            mapRef={mapRef}
            setclick={setclick}
            click={click}
            id="9"
            nome="Edson Francisco da Silva"
            cord={[-22.313463494129554, -49.120952901336516]}
            posição={posição}
            setposição={setposição}
            maps={
              "https://music.youtube.com/watch?v=PAGxkdAe2fg&list=RDAMVMOAaJcgty4Is"
            }
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
          <Marker position={posição} icon={greenicon} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default SimpleMap;
