import BodyEletronic from "./components/LixoEletronico/BodyEletronic";
import { useState } from "react";
import NavBar from "./components/LixoEletronico/NavBar";
import SobreNos from "./components/Sobre nois/SobreNois";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet, isso é importante pro mapa aparecer certo
import SimpleMap from "./components/Map/Map";
import Main from "./components/LixoEletronico/Main";
import Casa from "./components/Home/home";
import Foother from "./components/LixoEletronico/Fother";

function App() {
  const [pag, setpag] = useState("home");
  function setprincipal() {
    setpag("lixoeletronico");
    console.log("iu");
  }
  function sethome() {
    setpag("home");
  }
  function setmapa() {
    setpag("mapa");
  }
  function setsobre() {
    setpag("sobrenois");
  }
  if (pag == "home") {
    return (
      <div className="bg-emerald-200 h-screen w-screen overflow-x-hidden">
        <NavBar
          pagmap={setmapa}
          pagprinc={setprincipal}
          pagsobre={setsobre}
          paghome={sethome}
        />
        <Casa pagprinc={setprincipal} />
        <Foother />
      </div>
    );
  } else if (pag == "lixoeletronico") {
    return (
      <div className="bg-emerald-200 h-screen w-screen overflow-x-hidden">
        <BodyEletronic
          pagmap={setmapa}
          pagprinc={setprincipal}
          pagsobre={setsobre}
          paghome={sethome}
        />
        <Main />
        <Foother />
      </div>
    );
  } else if (pag == "mapa") {
    return (
      <div className="bg-emerald-200 w-screen h-screen">
        <NavBar
          pagmap={setmapa}
          pagprinc={setprincipal}
          pagsobre={setsobre}
          paghome={sethome}
        />
        <SimpleMap />
        <Foother />
      </div>
    );
  } else {
    return (
      <div className="bg-emerald-200 w-screen h-screen">
        <NavBar
          pagmap={setmapa}
          pagprinc={setprincipal}
          pagsobre={setsobre}
          paghome={sethome}
        />
        <SobreNos />
        <Foother />
      </div>
    );
  }
}
// if (valor !== null && valor !== undefined) {
//  console.log("O valor existe:", valor);
//}
export default App;
