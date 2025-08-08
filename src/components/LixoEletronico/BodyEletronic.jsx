import { useState } from "react";
import NavBar from "./NavBar";

function BodyEletronic() {
  const [menuClick, setMenuClick] = useState(false);

  function clicado() {
    setMenuClick((F) => !F);
  }

  return (
    <div>
      <NavBar verificar={menuClick} clicado={clicado} />
      <div className="ml-40 mr-40 mt-10 bg-blue">
        <h1 className="Orbitron text-[100px] text-yellow">LIXO ELETRONICO</h1>
        <h2 className=" Orbitron text-[30px] text-white text-center">
          "O impacto invisível dos resíduos eletrônicos"
        </h2>
      </div>
    </div>
  );
}

export default BodyEletronic;
