function NavBar({ verificar, clicado }) {
  function Menu() {
    if (verificar == true) {
      return (
        <div className="menu-start bg-yellow h-100 flex w-80 ml-[10px] rounded-b  r-3xl ">
          <div className="ml-2">
            <a href="http://">
              <button>Plastico</button>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="menu-end bg-yellow h-100 flex w-50 ml-[10px]">
          <div className="ml-2">
            <a href="http://">
              <button>Plastico</button>
            </a>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <nav>
        <div className="bg-yellow  h-12 w-screen">
          <div className="grid grid-cols-13 ">
            <div className="">
              <img
                src="./src/assets/Menu.png"
                alt=""
                onClick={clicado}
                className="w-10 h-10 pl-2 pt-2 "
              />

              <Menu />
            </div>

            <div className="col-start-13 Orbitron mt-2 text-white">
              <h1>sobre nós</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
