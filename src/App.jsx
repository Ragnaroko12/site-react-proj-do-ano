import BodyEletronic from "./components/LixoEletronico/BodyEletronic";
import Texto from "./components/Geral/Text";
import { useState } from "react";
import NavBar from "./components/LixoEletronico/NavBar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Componentes do react-leaflet
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet, isso é importante pro mapa aparecer certo

function App() {
  const [pag, setpag] = useState("principal");
  function setprincipal() {
    setpag("principal");
    console.log("iu");
  }
  function setmapa() {
    setpag("mapa");
    console.log("na");
  }
  function setsobre() {
    setpag("sobrenois");
    console.log("os");
  }

  if (pag == "principal") {
    return (
      <div className="bg-blue h-screen w-screen overflow-x-hidden">
        <BodyEletronic
          pagmap={setmapa}
          pagprinc={setprincipal}
          pagsobre={setsobre}
        />
      </div>
    );
  } else if (pag == "mapa") {
    const position = [-22.3147, -49.0703]; // Exemplo: coordenadas de Bauru-SP
    return (
      <div>
        <div>
          <NavBar
            pagmap={setmapa}
            pagprinc={setprincipal}
            pagsobre={setsobre}
          />
          <div style={{ height: "100vh", width: "100vw" }}>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={position}>
                <Popup>Aqui é Bauru!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar pagmap={setmapa} pagprinc={setprincipal} pagsobre={setsobre} />
      </div>
    );
  }
}

export default App;
