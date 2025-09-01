import NavBar from "./NavBar";

function BodyEletronic({ pagmap, pagprinc, pagsobre }) {
  return (
    <div>
      <NavBar pagmap={pagmap} pagprinc={pagprinc} pagsobre={pagsobre} />
      <div className=" p-5  ">
        <h1 className="Orbitron text-5xl text-gray-600">LIXO ELETRONICO</h1>
        <h2 className=" Orbitron text-2xl text-center">
          "O impacto invisível dos resíduos eletrônicos"
        </h2>
      </div>
    </div>
  );
}

export default BodyEletronic;
