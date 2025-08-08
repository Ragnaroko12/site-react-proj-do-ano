function NavBar({ clicado, mapa }) {
  return (
    <>
      <nav>
        <div className="bg-yellow  h-15 w-screen">
          <div className="grid grid-cols-13 ">
            <div className="text-white Sans col-start-5 w-30 h-11 mt-1  ">
              <button
                className="border-2 border-solid bg-blue-800 "
                onClick={mapa}
              >
                Mapa pontos de coleta
              </button>
            </div>

            <div className="col-start-13 Orbitron mt-2 text-white">
              <button onClick={clicado}>Sobre nois</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
