import NavBar from "./NavBar";

function BodyEletronic({ pagmap, pagprinc, pagsobre, paghome }) {
  return (
    <div>
      <NavBar
        pagmap={pagmap}
        pagprinc={pagprinc}
        pagsobre={pagsobre}
        paghome={paghome}
      />
      <div className=" p-5 items-center ">
        <h1 className="Orbitron text-5xl md:text-5xl text-emerald-800">
          LIXO ELETRONICO
        </h1>
        <h2 className=" Orbitron text-2xl text-gray-800 text-center">
          "O impacto invisível dos resíduos eletrônicos"
        </h2>
      </div>
    </div>
  );
}

export default BodyEletronic;
