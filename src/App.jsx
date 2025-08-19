import BodyEletronic from "./components/LixoEletronico/BodyEletronic";
import { useState } from "react";
import NavBar from "./components/LixoEletronico/NavBar";
import SobreNos from "./components/Sobre nois/SobreNois";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet, isso é importante pro mapa aparecer certo
import SimpleMap from "./components/Map/Map";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

function App() {
  const [pag, setpag] = useState("lixoeletronico");
  function setprincipal() {
    setpag("lixoeletronico");
    console.log("iu");
  }
  //  function setmais() {
  //   setpag("mais");
  //}
  function setmapa() {
    setpag("mapa");
  }
  function setsobre() {
    setpag("sobrenois");
  }
  if (pag == "lixoeletronico") {
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
    return (
      <div>
        <NavBar pagmap={setmapa} pagprinc={setprincipal} pagsobre={setsobre} />
        <SimpleMap />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar pagmap={setmapa} pagprinc={setprincipal} pagsobre={setsobre} />
        <SobreNos />
      </div>
    );
  }
}
// if (valor !== null && valor !== undefined) {
//  console.log("O valor existe:", valor);
//}
export default App;
