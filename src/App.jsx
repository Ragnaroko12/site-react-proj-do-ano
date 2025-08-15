import BodyEletronic from "./components/LixoEletronico/BodyEletronic";
import Texto from "./components/Geral/Text";
import { useState } from "react";
import NavBar from "./components/LixoEletronico/NavBar";
import SobreNos from "./components/Sobre nois/SobreNois";
import Map from "./components/Map/Map";

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
    return (
      <div>
        <NavBar pagmap={setmapa} pagprinc={setprincipal} pagsobre={setsobre} />
        <Map />
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

export default App;
